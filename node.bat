@echo off
SETLOCAL ENABLEEXTENSIONS

:: Vérifie si Node est déjà installé
node -v > nul 2>&1
IF %ERRORLEVEL% EQU 0 (
    echo Node.js est déjà installé.
) ELSE (
    :: Définir le chemin et le nom de l'installateur
    set installerPath=%~dp0nodejs-installer.msi

    :: Télécharger l'installateur Node.js LTS
    echo Téléchargement de Node.js...
    curl -o "%installerPath%" https://nodejs.org/dist/v20.15.1/node-v20.15.1-x64.msi

    :: Installe Node.js en mode silencieux
    echo Installation de Node.js...
    msiexec /i "%installerPath%" /qn

    :: Nettoyer le fichier d'installation
    del "%installerPath%"
)

:: Vérifie si Yarn est déjà installé
yarn -v > nul 2>&1
IF %ERRORLEVEL% EQU 0 (
    echo Yarn est déjà installé.
) ELSE (
    :: Installer Yarn
    echo Installation de Yarn...
    npm install -g yarn
)

:: Rentrer dans le dossier ./GLBanner_Vue et installer les dépendances
cd GLBanner_Vue

:: Vérifie si le fichier package-lock.json existe et le supprimer pour éviter les conflits
IF EXIST package-lock.json (
    echo Suppression du fichier package-lock.json...
    del package-lock.json
)

echo Installation terminée.

ENDLOCAL
