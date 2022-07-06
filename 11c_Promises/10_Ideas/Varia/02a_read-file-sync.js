//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://www.w3schools.com/nodejs/ref_util.asp
const util = require('util');

const file = 'student.json';

//Datei synchron auslesen
console.time("ReadFileSync-1");
let rawdata = fs.readFileSync(file);
let student = JSON.parse(rawdata);
console.log(student);

console.timeLog("ReadFileSync-1");

rawdata = fs.readFileSync(file);
student = JSON.parse(rawdata);
console.log(student);
console.timeEnd("ReadFileSync-1");
