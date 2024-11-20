const ps=require('ps-node');
const io=require('./app').io;
const susProcess=['node','openssl'];
function monitorProcesses(){
    ps.lookup({},(err,resultList)=>{
        if(err) throw new Error(err);
        resultList.forEach((process)=>{
            if (susProcess.includes(process.command)){
                console.log('Suspicious process detected: ${process.command}');
                io.emit('alert','sus process detected:${process.command}');
            }
        });
    });
}
setInterval(monitorProcesses,1000);