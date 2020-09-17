const http = require("http");
const app = require("./app");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const normalizePort = val =>{
    const port = parseInt(val,10);

if(isNaN(port)){
    return val;
}
if(port>=0){
    return port;
}
return false;
};


var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(bodyParser.json());

const port = normalizePort(process.env.PORT||"8080");
app.set("port",port);

const errorHandler =error =>{
    if(error.syscall !=='listen'){
        throw error;
    }
    const address = server.address();    
    const bind = typeof address === 'string' ?"pipe" + address : 'port: '+port;
    switch(error.code){
        case "EACCES" :
            console.error(bind + "require elaved privileges.");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
            default:
                throw error;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening',() =>{
    const address = server.address();
    const bind = typeof address === 'string'?'pipe'+ adress : "port: " +port;
    console.log('listening on '+bind);
});

server.listen(port);