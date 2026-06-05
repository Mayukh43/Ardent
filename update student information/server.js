const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Meni", course: "Python" },
    { id: 2, name: "Anita", course: "JavaScript" },
    { id: 3, name: "Rahul", course: "React" }
];

// update student by ID
app.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(x => x.id === id);

    if (student) {
        student.name = req.body.name || student.name;
        student.course = req.body.course || student.course;
        res.send(`Updated Student: ID ${student.id}, Name ${student.name}, Course ${student.course}`);
    } else {
        res.send("Student not found");
    }
});

//data all view
app.get('/students',(req,res)=>{
    res.send(students);
});

const port=5500;
//how to run port (listen method)
app.listen(port,()=>{
    console.log("server is running port 5500");
})