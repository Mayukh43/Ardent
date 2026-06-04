let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Phone", price: 20000, quantity: 2 },
    { name: "Headphones", price: 2000, quantity: 3 }
];

function total(items) {
    let total = items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    return `Total: ₹${total}`;
}

module.exports = { cart, total };