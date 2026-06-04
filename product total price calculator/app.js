const cart = require('./cart');

let penprice = 10, penqty = 5;
let pencilprice = 5, pencilqty = 3;

let pentotal = cart(penprice, penqty);
let penciltotal = cart(pencilprice, pencilqty);

let total = pentotal + penciltotal;

console.log("Pen Total:", pentotal);
console.log("Pencil Total:", penciltotal);
console.log("Total Cost:", total);