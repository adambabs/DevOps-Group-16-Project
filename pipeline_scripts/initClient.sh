#bin/sh

SERVER_IP=$1

cd DevOps-Group-16-Project/client
npm install
(npm start serverip=SERVER_IP &)


