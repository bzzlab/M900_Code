//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Running at Port ${port}`);


//Variante 1
app.use('/bilder', express.static('img'));
app.use('/images/:id', express.static('img'));

