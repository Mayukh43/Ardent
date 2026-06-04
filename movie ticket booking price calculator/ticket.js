function price(ticketcount, priceperticket) {
    let totalPrice = ticketcount * priceperticket;
    return `Total Price for ${ticketcount} tickets: ₹${totalPrice}`;
}

module.exports = price;
