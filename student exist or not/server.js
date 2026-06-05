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

// search students by name
app.get('/students/search/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const results = students.filter(x => x.name.toLowerCase().includes(name));

    if (results.length > 0) {
        res.send(results);
    } else {
        res.send("No students found");
    }
});
