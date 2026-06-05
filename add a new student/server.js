const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

let students = [
    { id: 1, name: "Meni", course: "Python" },
    { id: 2, name: "Anita", course: "JavaScript" },
    { id: 3, name: "Rahul", course: "React" }
];

//data insert
app.post('/students',(req,res)=>{
    const {name,course}=req.body;
    //new value
    const newstudent={
        id:Date.now(),
        name,
        course,
    };
    students=[...students,newstudent];
    res.send(newstudent);
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