@echo off
echo ========================================
echo    BFIT - Script de Deploiement
echo ========================================
echo.

REM Verifier si Git est installe
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Git n'est pas installe!
    echo Telechargez Git sur: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Verifier si le dossier est un repo Git
if not exist ".git" (
    echo [INFO] Initialisation du repository Git...
    git init
    echo.
)

REM Verifier si un remote existe
git remote get-url origin >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Aucun repository distant configure.
    echo.
    set /p REPO_URL="Entrez l'URL de votre repository GitHub: "
    git remote add origin %REPO_URL%
    echo.
)

echo [INFO] Ajout des fichiers modifies...
git add .
echo.

set /p COMMIT_MSG="Message de commit (ou appuyez sur Entree pour 'Update'): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update

echo [INFO] Creation du commit...
git commit -m "%COMMIT_MSG%"
echo.

echo [INFO] Envoi vers GitHub...
git push -u origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo [SUCCES] Code envoye sur GitHub!
    echo.
    echo Vercel va automatiquement deployer
    echo votre site dans 2-3 minutes.
    echo ========================================
) else (
    echo ========================================
    echo [ERREUR] Probleme lors de l'envoi.
    echo Verifiez vos identifiants GitHub.
    echo ========================================
)

echo.
pause
