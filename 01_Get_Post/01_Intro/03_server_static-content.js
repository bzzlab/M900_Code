//Add module
const express = require('express');
const studentsData = require("./data/students.json");
//Important: DO NOT FORGET round braces!
const app     = express();
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Running at Port ${port}`);


//Variante 1
app.use('/bilder', express.static('img'));
app.put('/images/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${__dirname}`);
    res.sendFile(`./img/0${id}.jpg`, { root: __dirname });
});
