param(
  [int] $Port = 3060
)

$ErrorActionPreference = "Stop"
$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$NextDir = Join-Path $Root ".next"
$TurbopackDir = Join-Path $Root ".turbo"

Write-Host "Clearing Next.js / Turbopack cache in: $Root"

foreach ($dir in @($NextDir, $TurbopackDir)) {
  if (Test-Path $dir) {
    Remove-Item -LiteralPath $dir -Recurse -Force -ErrorAction SilentlyContinue
    if (Test-Path $dir) {
      Write-Warning "Could not fully delete $dir (OneDrive or a running dev server may be locking it). Stop 'next dev', then run this again."
    } else {
      Write-Host "Removed $dir"
    }
  }
}

Push-Location $Root
try {
  Write-Host "Starting Turbopack on port $Port ..."
  & npx next dev --turbopack -p $Port
} finally {
  Pop-Location
}
