let feedbacks = []; 
function addfeedback(name, message) {
    let feedback = {
        customerName: name,
        customerMessage: message
    };

    feedbacks.push(feedback);
    return feedbacks;
}

module.exports = { feedbacks, addfeedback };
