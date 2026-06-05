const express=require('express');
const app=express();
app.use(express.json());
const port=5500;
app.listen(port,()=>{
    console.log("server is running 5500");
});
let students = [
    { id: 1, name: "Mayukh", course: "Python", city: "Kolkata", fees: 5000 },
    { id: 2, name: "Anita", course: "JavaScript", city: "Delhi", fees: 7000 }
];

// add multiple students at once
app.post('/students/add-multiple', (req, res) => {
    const newStudents = req.body; // expecting an array of student objects

    if (Array.isArray(newStudents) && newStudents.length > 0) {
        students = students.concat(newStudents);
        res.send(`Added ${newStudents.length} students successfully`);
    } else {
        res.send("Please provide an array of students");
    }
});