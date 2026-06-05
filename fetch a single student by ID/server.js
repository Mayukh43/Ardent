const express = require('express');
const app = express();


// Sample students data
const students = [
    { id: 1, name: "Meni", course: "Python" },
    { id: 2, name: "Anita", course: "JavaScript" },
    { id: 3, name: "Rahul", course: "React" }
];

// Route to fetch all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Route to fetch a single student by ID
app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.send(student);
    } else {
        res.send({ message: "Student not found" });
    }
});

const port=5500;
//how to run port (listen method)
app.listen(port,()=>{
    console.log("server is running port 5500");
})