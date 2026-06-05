const express=require('express');
const app=express();
app.use(express.json());
const port=5500;
app.listen(port,()=>{
    console.log("server is running 5500");
});
let students = [
    { id: 1, name: "Mayukh", course: "Python", city: "Kolkata", fees: 5000 },
    { id: 2, name: "Anita", course: "JavaScript", city: "Delhi", fees: 7000 },
    { id: 3, name: "Rahul", course: "React", city: "Mumbai", fees: 4500 },
    { id: 4, name: "Suman", course: "Java", city: "Kolkata", fees: 8000 }
];


// calculate total fees collected
app.get('/students/fees/total', (req, res) => {
    const totalFees = students.reduce((sum, student) => sum + student.fees, 0);
    res.send(`Total Fees Collected: ${totalFees}`);
});