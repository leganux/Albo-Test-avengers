#!/bin/sh

npm install pm2 -g


pm2 start ecosystem.config.js --env production

pm2 list







