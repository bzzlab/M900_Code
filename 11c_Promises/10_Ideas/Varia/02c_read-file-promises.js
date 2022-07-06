//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://www.w3schools.com/nodejs/ref_util.asp
const util = require('util');

const file = 'student.json';
//Datei asynchron mit Promise auslesen
const readFilePromisified = util.promisify(fs.readFile);
console.time("ReadFileAsync-Promise");
readFilePromisified(file)
    .then(function (text) { // (A)
        const obj = JSON.parse(text);
        console.log(`Reading file with Promise \n${JSON.stringify(obj, null, 4)}`);
    })
    .catch(function (error) { // (B)
        // File read error or JSON SyntaxError
        console.error('An error occurred', error);
    });

console.timeLog("ReadFileAsync-Promise");
readFilePromisified(file)
    .then(function (text) { // (A)
        const obj = JSON.parse(text);
        console.log(`Reading file with Promise \n${JSON.stringify(obj, null, 4)}`);
    })
    .catch(function (error) { // (B)
        // File read error or JSON SyntaxError
        console.error('An error occurred', error);
    });
console.timeEnd("ReadFileAsync-Promise");
