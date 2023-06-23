#!/bin/sh

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Node.js no está instalado. Por favor, instálalo antes de continuar."
    exit 1
fi

echo "Comenzando la instalación...."

node -v
npm -v

echo "Instalando dependencias...."

cd ./install
npm install --production

cd ./../gateway/marvel
npm install -g express-gateway
npm install --production

cd ./../../service_a
npm install --production

cd ./../service_b
npm install --production

echo "Conectandose a la API  y recibiendo datos ...."


if ! command -v mongod &> /dev/null; then
    echo "MongoDB no está instalado. Por favor, instálalo antes de continuar."
    exit 1
fi

cd ./../install
node index.js

echo "Finalizo con exito "

exit 1
