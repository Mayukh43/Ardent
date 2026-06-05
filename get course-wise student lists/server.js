const express=require('express');
const app=express();
app.use(express.json());
const port=5500;
app.listen(port,()=>{
    console.log("server is running 5500");
});
let students = [
    { id: 1, name: "Mayukh", course: "Python", city: "Kolkata", fees: 5000 },
    { id: 2, name: "Anita", course: "Java", city: "Delhi", fees: 7000 },
    { id: 3, name: "Rahul", course: "React", city: "Mumbai", fees: 4500 },
    { id: 4, name: "Suman", course: "Java", city: "Kolkata", fees: 8000 }
];

// course-wise student lists
app.get('/students/course-wise', (req, res) => {
    const courseWise = {};

    students.forEach(student => {
        if (!courseWise[student.course]) {
            courseWise[student.course] = [];
        }
        courseWise[student.course].push(student);
    });

    res.send(courseWise);
});