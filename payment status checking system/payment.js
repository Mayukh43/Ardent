function check(status) {
    if (status=="pending") {
        return "Payment is pending.";
    } else if (status=="processing") {
        return "Payment is being processed.";
    } else if (status=="completed") {
        return "Payment completed successfully!";
    } else if (status=="failed") {
        return "Payment failed. Please try again.";
    } else if (status=="refunded") {
        return "Payment has been refunded.";
    } else {
        return "Invalid payment status.";
    }
}

module.exports = check;