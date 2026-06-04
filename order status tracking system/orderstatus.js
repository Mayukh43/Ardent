function orderstatus(status) {
    if (status == "pending") {
        return "Your order is pending confirmation.";
    } else if (status == "processing") {
        return "Your order is being prepared.";
    } else if (status == "shipped") {
        return "Your order has been shipped.";
    } else if (status == "delivered") {
        return "Your order has been delivered.";
    } else if (status == "cancelled") {
        return "Your order has been cancelled.";
    } else {
        return "Invalid order status.";
    }
}

module.exports = orderstatus;
