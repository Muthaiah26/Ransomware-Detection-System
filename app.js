const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server); 
const path=require('path');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/alert.html');
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
module.exports = { io };
setInterval(() => {
    io.emit('alert', 'Test alert message: Ransomware Detection System is active.');
}, 5000); 
require('./fileMonitor');
require('./processMonitor');