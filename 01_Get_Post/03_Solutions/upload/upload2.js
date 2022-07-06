const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/img'});


//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://nodejs.org/api/path.html
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/bilder', express.static(path.join(__dirname, 'img')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


const handleError = (err, res) => {
    res.status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};


app.post('/upload', upload.single('bild'), (req, res) => {

    const tempPath = req.file.path;
    const origFile = req.file.originalname;
    const targetPath = path.join(__dirname, "./img/" + origFile);

    if (path.extname(origFile).toLowerCase() === ".png") {
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);

            res.status(200)
                .contentType("text/plain")
                .end(`File  uploaded!`);
        });
    } else {
        fs.unlink(tempPath, err => {
            if (err) return handleError(err, res);

            res
                .status(403)
                .contentType("text/plain")
                .end("Only .png files are allowed!");
        });
    }
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT);
});
