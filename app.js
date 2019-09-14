const log= require('./logger')

console.log("hello world");

log("this is log message");






//====================================================================================
//importing the path module and using it to parse the __filename

const path=require('path');
const pathObj= path.parse(__filename);

console.log(pathObj);