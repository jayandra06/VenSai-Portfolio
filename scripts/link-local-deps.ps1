# One-time setup: keep source on OneDrive, but store node_modules and .next locally.
$ErrorActionPreference = "Stop"

$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$LocalRoot = Join-Path $env:LOCALAPPDATA "VenSai-Portfolio-local-deps"
$LocalNodeModules = Join-Path $LocalRoot "node_modules"
$LocalNext = Join-Path $LocalRoot ".next"
$NmLink = Join-Path $ProjectRoot "node_modules"
$NextLink = Join-Path $ProjectRoot ".next"

function Ensure-Junction([string]$LinkPath, [string]$TargetPath) {
  New-Item -ItemType Directory -Path $TargetPath -Force | Out-Null

  if (Test-Path -LiteralPath $LinkPath) {
    $item = Get-Item -LiteralPath $LinkPath -Force
    if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) {
      Write-Host "OK (already linked): $LinkPath"
      return
    }
    Write-Host "Removing $LinkPath from OneDrive tree..."
    cmd /c "rmdir /s /q `"$LinkPath`""
  }

  Write-Host "Linking $LinkPath -> $TargetPath"
  cmd /c mklink /J `"$LinkPath`" `"$TargetPath`""
  if ($LASTEXITCODE -ne 0) {
    throw "mklink failed. Turn on Windows Developer Mode, or run PowerShell as Administrator."
  }
}

New-Item -ItemType Directory -Path $LocalRoot -Force | Out-Null

if (-not (Test-Path (Join-Path $LocalNodeModules "next"))) {
  if (Test-Path -LiteralPath $NmLink) {
    $existing = Get-Item -LiteralPath $NmLink -Force
    if (-not ($existing.Attributes -band [IO.FileAttributes]::ReparsePoint)) {
      Write-Host "Copying node_modules to local disk (one-time; may take a few minutes)..."
      robocopy $NmLink $LocalNodeModules /E /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null
      if ($LASTEXITCODE -ge 8) {
        throw "robocopy failed with exit code $LASTEXITCODE"
      }
    }
  }
}

Ensure-Junction -LinkPath $NmLink -TargetPath $LocalNodeModules
Ensure-Junction -LinkPath $NextLink -TargetPath $LocalNext

if (-not (Test-Path (Join-Path $LocalNodeModules "next"))) {
  Write-Host "Installing dependencies into local node_modules..."
  Push-Location $ProjectRoot
  try {
    npm ci
  } finally {
    Pop-Location
  }
}

Write-Host ""
Write-Host "Done. Heavy folders are on local disk:"
Write-Host "  $LocalRoot"
Write-Host "Run:  npm run dev:3010"
