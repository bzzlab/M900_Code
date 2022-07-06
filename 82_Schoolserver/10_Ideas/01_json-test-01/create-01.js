//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://nodejs.org/api/path.html
const path = require('path');

//Warning: Korrekt setzen!!
const staticPath = './82_Schoolserver/10_Ideas/data/';

let fileLoc = path.resolve(staticPath+'employee.json');
fs.readFile(fileLoc, 'utf8', (error, text) => {
    if (error) {
        console.error(`Error ${error}`);
    } else {
        try {
            //JSON-Formt auslesen mit der Methode .parse
            const obj = JSON.parse(text);
            obj.column.metada
            let out = "";
            //durch die Daten iterieren
            for (let row in obj.school){
                for (let key in obj.school[row]){
                    out += `${key}: ${obj.school[row][key]}, `;
                }
            }
            res.send(JSON.stringify(out, null, 4));
        } catch (e) {
            console.error('Invalid JSON in file');
        }
    }
});
