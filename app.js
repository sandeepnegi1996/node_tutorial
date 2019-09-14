const log= require('./logger')

console.log("hello world");

log("this is log message");






//====================================================================================
//importing the path module and using it to parse the __filename

// const path=require('path');
// const pathObj= path.parse(__filename);

// console.log(pathObj);

//=====================================================================================
const os=require('os');
const freeMemory=os.freemem();
const hostName=os.hostname();
const networkInterfaces1=os.networkInterfaces();
console.log(`free memory is ${freeMemory} and hostname is ${hostName}`);
console.log(`network interfaces are ${networkInterfaces1}`);


//=====================================================================================
//===========NOW SHOWING THE FS=========================================================

const fs=require('fs');
//readdir will list all the files present inthis directory
fs.readdir('./',(err,files)=>{
    if (err) {
        console.log("error is "+err);
    } else {
        console.log(files); 
    }
})



//========================================================================================
//==========EVENT EMITTER=============================================================



const EventEmitter=require('events');
const emitter=new EventEmitter();

emitter.on('firstevent',(arg)=>{
    console.log("event received with id is :- ",arg.id);
})

emitter.emit('firstevent',{id:1,url:'www.google.com'});
//we can pass the argument with the event 




