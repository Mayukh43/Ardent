let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Headphones", price: 2000 }
];

function show() {
    let cards = products.map(product => {
        return `Product: ${product.name}, Price: ₹${product.price}`;
    });

    return cards;
}

module.exports = show;