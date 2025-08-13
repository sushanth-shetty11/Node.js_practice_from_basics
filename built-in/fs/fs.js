//! FS - File System 

//it is built in module
//used to interact and perform CRUD operations on files like reading, writing, deleting etc...

//*CRUD on files
//there are two ways to do it
//? 1.Synchronous way

const { log } = require('console');
const fs = require('fs')
//console.log(fs)

//*create a file
//? case 1: when there is no file
// fs.writeFileSync('./demo.js','hello i am demo file')
// console.log("file has created")

//? case 2: when there is  file without data
// fs.writeFileSync('./demo.js','hello i am demo file')
// console.log("file has created")

//? case 3: when there is  file with data
// fs.writeFileSync('./demo.js',' how are you ');
// console.log("file has created")

//*append a file
//? case 1: when there is no file
// fs.appendFileSync('./demo.js','hello i am demo file')
// console.log("file has created")

//? case 2: when there is  file without data
// fs.appendFileSync('./demo.js','hello i am demo file')
// console.log("file has created")

//? case 3: when there is  file with data
// fs.appendFileSync('./demo.js',' how are you ');
// console.log("file has created")

//*Read a file
let data = fs.readFileSync('./demo.html','utf-8');
console.log(data);
//console.log(data.toString()) //*not Recommended

