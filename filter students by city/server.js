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

// filter students by city
app.get('/students/city/:city', (req, res) => {
    const city = req.params.city.toLowerCase();
    const results = students.filter(x => x.city.toLowerCase() === city);

    if (results.length > 0) {
        res.send(results);
    } else {
        res.send("No students found in this city");
    }
});