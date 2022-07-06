//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app = express();
const port = process.env.PORT || 3000;

//Auf den Port hören
app.listen(port);
console.log(`Running at port ${port}`);

//GET request
app.get('/api/students', (req,res) => {
    //res.send("Request for students not yet implemented!");
    res.send(`${req.method} request for students not yet implemented!`);
});

//POST request
app.post('/api/students', (req,res) => {
    //res.send("Request for students not yet implemented!");
    res.send(`${req.method} request for students not yet implemented!`);
});
