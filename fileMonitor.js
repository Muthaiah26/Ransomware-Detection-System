const chokidar=require('chokidar');
const path=require('path');
const io=require('./app').io;
const pathToWatch='./monitored_directory';
const watcher=chokidar.watch(pathToWatch,{persistent:true});
watcher.on('change',(filepath) =>{
    const absolutePath = path.resolve(filepath);
    io.emit('alert', 'file modified:${absolutePath}');
});
watcher.on('add',(filepath) =>{
    console.log('new file added:${filepath}');
    io.emit('alert','new file added:${filepath}');
});
watcher.on('unlink',(filepath) =>{
    console.log('file deleted:${filepath}');
    io.emit('alert','file deleted:${filepath}');
});
