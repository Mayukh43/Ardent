const express=require('express');
const app=express();
const port = 5500
app.listen(port,()=>{
    console.log("server is running 5500")
});
let students = [
    { id: 1, name: "Meni", course: "Python", city: "Kolkata" },
    { id: 2, name: "Anita", course: "JavaScript", city: "Delhi" },
    { id: 3, name: "Rahul", course: "React", city: "Mumbai" },
    { id: 4, name: "Suman", course: "Java", city: "Kolkata" }
];

app.get('/students/count', (req, res) => {
    const total = students.length;
    res.send(`Total Students: ${total}`);
});