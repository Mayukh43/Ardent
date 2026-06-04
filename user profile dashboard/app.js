const show = require('./profile');

let userprofile = {
    name: "abc",
    email: "a@gmail.com",
    age: 20,
    country: "India",
    course: "MERN"
};

console.log(show(userprofile));
