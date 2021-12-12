const express = require("express");
const socket = require("socket.io");

const app = express(); // Initaialize with ready server

app.use(express.static("public"));

let port = process.env.PORT || 5000;
let server = app.listen(port , ()=>{
    console.log("Listening to port"+ port);
})

let io = socket(server);

io.on("connection",(socket)=>{
    console.log("made socket connection");

    //Recieved Data
    socket.on("beginPath",(data)=>{
        //Transfer Data to all connected cp
        io.sockets.emit("beginPath",data);
    })

    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoundo",(data)=>{
        io.sockets.emit("redoundo",data);
    })
});

