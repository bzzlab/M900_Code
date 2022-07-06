const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/img'});

//https://nodejs.org/api/path.html
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/bilder', express.static(path.join(__dirname, 'img')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/upload', upload.single('bild'),
    (req, res) => {

    let fileName = req.file;
    console.log(fileName);
    if (fileName.mimetype == 'image/png'){
        console.log(`Extension: png`);
    }

    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});
