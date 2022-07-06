//Add module
const express = require('express');
//Important: DO NOT FORGET round braces!
const app     = express();
const router = express.Router();
const port = process.env.PORT || 3000;

//Data
const studentsData = require('./data/students.json');

app.listen(port);
console.log(`Running at Port ${port}`);

//Daten via id auslesen
app.use('/api', router);
router.get('/students', (req,res) =>{
    res.send(studentsData);
});
router.get('/students/:id', (req,res) =>{
    const id = req.params.id;
    console.log(id);
    const student = studentsData.filter(eintrag => eintrag.student_id === parseInt(id));
    res.send(student);
});
