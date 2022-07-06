/*
Thema: Einfacher Server, welcher
a. CORS Anfragen (CORS Requests) erlaubt
b. Bei einer Anfrage durch einen Client per Zufallsgenerator einen Film zurück gibt.
 */

let express = require("express");
let app     = express();
let path    = require("path");
//let fs = require("fs");
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

/*
Aufgabe 1
a) Erstellen Sie ein Array mit 10 Einträgen von aktuellen Musikbands, der von diesem
Server aufgerufen werden kann.
b) Die URL muss http://localhost:3000/musicbands lauten
c) Aus der List von 1a soll per Zufall eine Musikband zurückgegeben werden (HTTP Response)
d) Fügen Sie die korrekten Headers ein, damit CORS Requests beantworten werden.
 */


// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});

//Source https://www.thegamegal.com/printables/
const musicBandPuzzleList = ["Toto","AC/DC","Whitesnake","Van Halen",
    "Peter Gabriel", "Pink Floyd", "Rush", "Joe Satriani"];

//call url http://localhost:3000/musicbands
app.get('/musicbands', (req, res) => {
    const random = Math.floor(Math.random() * musicBandPuzzleList.length);
    res.send(JSON.stringify({puzzle: musicBandPuzzleList[random]}));
});


