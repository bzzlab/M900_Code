//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const router_v1     = express.Router();
const router_v2     = express.Router();
const port = process.env.PORT || 3000;

//Data
const studentsData = require('./data/students.json');

app.listen(port);
console.log(`Running at Port ${port}`);

//Route Version 1
app.use('/api', router_v1);
router_v1.get('/students', (req,res) =>{
    res.send(`${req.method} students not yet implemented!`);
});
router_v1.post('/students', (req,res) =>{
    res.send(`${req.method} students not yet implemented!`);
});

//Route Version 2
app.use('/api/v2', router_v2);
router_v2.get('/students', (req,res) =>{
    res.send(studentsData);
});
