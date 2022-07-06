//Add module express
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Running at Port ${port}`);


//GET request
app.get('/api/students', (req,res) =>{
  //res.send("students not yet implemented!");
  res.send(`${req.method} students not yet implemented!`);
});

//POST request
app.post('/api/students', (req,res) =>{
  //res.send("students not yet implemented!");
    res.send(`${req.method} students not yet implemented!`);
});
