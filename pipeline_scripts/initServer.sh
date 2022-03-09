#!/bin/sh

DB_USERNAME=$1
DB_PASSWORD=$2
DB_IP=$3
CLIENT_IP=$4

cd DevOps-Group-16-Project/server
npm install
(node index dbusername=DB_USERNAME dbpwd=DB_PASSWORD dbip=DB_IP clientip=CLIENT_IP &)

