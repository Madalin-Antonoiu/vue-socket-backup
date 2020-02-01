//Refactored for standard notation
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const Socketio = require("socket.io")(http);
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

app.get('/', (req, res) => { 
    //res.send('Hello World!')
    app.use(express.static('./client/dist/index.html'))
})


// Only for the Canvas game
var position = {
 x: 200,
 y: 200
}
// end of it

Socketio.on("connection", socket => {
    socket.emit("position", position) // As in pos line5
    socket.on('move', data => {
        switch(data){
            case "left" :
                position.x -= 5 //position = position -5 
                //Socketio emits to all clients, whereas socket.emit will emit to just that 1 socket
                Socketio.emit("position", position) //we want to update the position on ALL clients
                break;

            case "right" :
                position.x += 5 //position = position -5 
                //Socketio emits to all clients, whereas socket.emit will emit to just that 1 socket
                Socketio.emit("position", position) //we want to update the position on ALL clients
                break;

            case "up" :
                position.y -= 5 //position = position -5 
                //Socketio emits to all clients, whereas socket.emit will emit to just that 1 socket
                Socketio.emit("position", position) //we want to update the position on ALL clients
                break;

            case "down" :
                position.y += 5 //position = position -5 
                //Socketio emits to all clients, whereas socket.emit will emit to just that 1 socket
                Socketio.emit("position", position) //we want to update the position on ALL clients
                break;
        }
    })
});

// end of it


    