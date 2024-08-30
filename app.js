const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const SocketIo = require('socket.io');
const io = SocketIo(server);
const path = require('path')

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get('/chat',(req,res)=>{
    res.render('chat');
})

io.on("connection",(socket)=>{
    console.log("connected");
})

server.listen(3000);