const express=require ('express');
const app=express();
app.use(express.json());
const port=5500;
app.listen(port,()=>{
    console.log("server is running port 5500");
});

let students = [
    { id: 1, name: "Meni", course: "Python" },
    { id: 2, name: "Anita", course: "JavaScript" },
    { id: 3, name: "Rahul", course: "React" },
    { id: 4, name: "Suman", course: "Java" }
];

// search students by course
app.get('/students/search/:course', (req, res) => {
    const course = req.params.course.toLowerCase();
    const results = students.filter(x => x.course.toLowerCase() === course);

    if (results.length > 0) {
        res.send(results);
    } else {
        res.send("No students found");
    }
});
