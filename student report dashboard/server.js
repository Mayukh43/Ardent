const express=require('express');
const app=express();
app.use(express.json());
const port=5500;
app.listen(port,()=>{
    console.log("server is running 5500");
});
let students = [
    { id: 1, name: "Meni", course: "Python", city: "Kolkata", fees: 5000 },
    { id: 2, name: "Anita", course: "JavaScript", city: "Delhi", fees: 7000 },
    { id: 3, name: "Rahul", course: "React", city: "Mumbai", fees: 4500 },
    { id: 4, name: "Suman", course: "Java", city: "Kolkata", fees: 8000 }
];


// student report dashboard
app.get('/students/report', (req, res) => {
    const totalStudents = students.length;
    const totalFees = students.reduce((sum, s) => sum + s.fees, 0);

    // course-wise counts
    const courseCounts = {};
    students.forEach(s => {
        courseCounts[s.course] = (courseCounts[s.course] || 0) + 1;
    });

    const report = {
        totalStudents,
        totalFees,
        courseCounts
    };

    res.send(report);
});