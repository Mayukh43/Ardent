const product = require('./product');

console.log("All Products:", product.products);
let singleproduct = product.findp(2);
console.log("Product Details:", singleproduct);
