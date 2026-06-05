const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to My WebPage🚀');
});

const port=5500;
//how to run port (listen method)
app.listen(port,()=>{
    console.log("server is running port 5500");
})