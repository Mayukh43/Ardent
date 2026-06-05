const express = require('express');
const app = express();

let students = [
    { id: 1, name: "Meni", course: "Python" },
    { id: 2, name: "Anita", course: "JavaScript" },
    { id: 3, name: "Rahul", course: "React" }
];

// delete student by ID
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(x => x.id === id);

    if (student) {
        students = students.filter(x => x.id !== id);
        res.send(`Deleted Student: ID ${student.id}, Name ${student.name}, Course ${student.course}`);
    } else {
        res.send("Student not found");
    }
});

const port=5500;
//how to run port (listen method)
app.listen(port,()=>{
    console.log("server is running port 5500");
})
