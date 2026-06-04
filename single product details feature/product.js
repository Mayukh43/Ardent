let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 15000 },
    { id: 3, name: "Tablet", price: 20000 }
];

function findp(pid) {

    return products.find(product => product.id === pid);
}

module.exports = { products, findp };
