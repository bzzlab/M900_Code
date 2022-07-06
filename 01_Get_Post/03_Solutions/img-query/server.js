//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const router = express.Router();
const port = process.env.PORT || 3000;

//https://nodejs.org/api/path.html
const path = require('path');

app.listen(port);
console.log(`Running at Port ${port}`);

//Bilder via Dateinamen auslesen
app.get('/bilder/:name', function (req, res, next) {
    console.log(__dirname);
    let options = {
        root: path.join(__dirname, 'img'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    let fileName = req.params.name;
    console.log(`filename: ${fileName}`);
    let fileNameFormatted = ("0" + fileName).slice(-2)+".jpg";
    console.log(`fileNameFormatted: ${fileNameFormatted}`);
    res.sendFile(fileNameFormatted, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})
