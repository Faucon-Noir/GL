@echo off
SETLOCAL ENABLEEXTENSIONS

call node.bat

echo Installation des dépendances...
yarn install

echo Démarrage...
yarn dev

ENDLOCAL
