function show(user) {
    // Object destructuring
    const { name, email, age, location, course } = user;

    return `
    User Profile Dashboard
    ----------------------
    Name: ${name}
    Email: ${email}
    Age: ${age}
    Country: ${location}
    Course: ${course}
    `;
}

module.exports = show;
