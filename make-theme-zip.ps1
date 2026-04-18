Add-Type -AssemblyName System.IO.Compression.FileSystem

$sourceDir = 'C:\Users\s_fon\Desktop\BestFkersintownV3\theme'
$destZip   = 'C:\Users\s_fon\Desktop\BestFkersintownV3\BFIT-Stencil-Theme.zip'

if (Test-Path $destZip) { Remove-Item $destZip }

$zip = [System.IO.Compression.ZipFile]::Open($destZip, 'Create')

$excludePattern = 'node_modules|\.stencil|pnpm-lock|run-bundle|stencil-init-out|package\.json|package-lock'

Get-ChildItem -Path $sourceDir -Recurse -File | Where-Object {
    $_.FullName -notmatch $excludePattern
} | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceDir.Length + 1).Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $relativePath) | Out-Null
    Write-Host "  + $relativePath"
}

$zip.Dispose()
Write-Host "`nDone: $destZip"
