# Run Next from a non-OneDrive folder to avoid cloud file read errors (errno -4094).
$ErrorActionPreference = "Stop"

$Source = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Dest = Join-Path $env:LOCALAPPDATA "VenSai-Portfolio-dev"

Write-Host "Source: $Source"
Write-Host "Local dev copy: $Dest"

if (-not (Test-Path $Dest)) {
  New-Item -ItemType Directory -Path $Dest -Force | Out-Null
}

# Sync project sources; keep a local node_modules and .next outside OneDrive.
robocopy $Source $Dest /E /XD node_modules .next .git /XF *.log /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null
if ($LASTEXITCODE -ge 8) {
  throw "robocopy failed with exit code $LASTEXITCODE"
}

Push-Location $Dest
try {
  if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies in local copy (first run may take a few minutes)..."
    npm ci
  }
  Write-Host "Starting Next.js (Turbopack) from local copy..."
  npm run dev:3010
} finally {
  Pop-Location
}
