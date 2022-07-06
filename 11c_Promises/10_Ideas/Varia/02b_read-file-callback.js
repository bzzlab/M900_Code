//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://www.w3schools.com/nodejs/ref_util.asp
const util = require('util');

const file = 'student.json';
const file2 = 'student2.json';

//Datei asynchron mit Callback auslesen
console.time("ReadFileAsync-Callback");
/*
fs.readFile(file, (error, text) => {
        if (error) {
            console.error('Error while reading config file');
        } else {
            try {
                const obj = JSON.parse(text);
                //let out = JSON.stringify(obj.last_name, null, 4);
                //let out = JSON.stringify(obj["last_name"], null, 4);
                let out = "";
                for (let key in obj){
                    out += `${key}: ${obj[key]}\n`;
                }
                console.log(out);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
*/


fs.readFile(file2, (error, text) => {
        if (error) {
            console.error('Error while reading config file');
        } else {
            try {
                const obj = JSON.parse(text);
                let out = "";
                for (let row in obj){
                    console.log(`${row}: ${JSON.stringify(obj.row, null, 4)}\n`);
                    for (let key in obj){
                        out += `${key}: ${obj[row][key]}\n`;
                    }
                }

                console.log(out);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });

console.timeLog("ReadFileAsync-Callback");
console.timeEnd("ReadFileAsync-Callback");



