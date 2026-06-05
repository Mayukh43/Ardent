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
    res.send(students);
});

const port=5500;
//how to run port (listen method)
app.listen(port,()=>{
    console.log("server is running port 5500");
})
