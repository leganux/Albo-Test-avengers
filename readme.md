## Albo Test - Backend
### Angel Erick Cruz Olivera - 22 Junio 2023

<hr>

### Estructura

- dir:gateway 
  - Incluye los archivos de configuracion del gateway que controla los microservicios
- dir:install
  - Incluye los archivos de preconfiguración y coneccion con la API de marvel
- dir:service_a
  - Incluye los archivos de de la API de Colaboradores
- dir:service_b
  - Incluye los archivos de de la API de Personajes
- assemble.sh 
- avengers.sh
- ecosystem.config.js

### Prerequisitos
* NodeJS 14+
* MongoDB
* Sistema operativo UNIX (MACOSX/LINUX)

### Get Started

* Clona el proyecto
* Abre un terminal en el folder de este proyecto
* Ejecta el archivo assemble.sh 
 ```sh assemble.sh```
* Espera a que termine el programa
* Ejecta el archivo avengers.sh
  ```sh avengers.sh```
* Abre tu navegador e ingresa a 
  * http://localhost/marvel/colaborators/Captain%20America
  * http://localhost/marvel/characters/Captain%20America

### Más.
* usa pm2 para arrancar o detener los procesos
  * ```pm2 start all```
  * ```pm2 stop all```
  * ```pm2 delete all```
  * ```pm2 log```   Para ver los logs

