const orderstatus = require('./orderstatus');

console.log(orderstatus("pending"));  
console.log(orderstatus("processing"));
console.log(orderstatus("shipped"));
console.log(orderstatus("delivered"));
console.log(orderstatus("cancelled"));
console.log(orderstatus("unknown"));