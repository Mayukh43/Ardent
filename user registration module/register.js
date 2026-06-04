function register(name, email, password) {
    let user = {
        name: name,
        email: email,
        password: password
    };
    if (!name||!email||!password) {
        return "Please fill all fields!";
    }
    return user; // return the user object
}

module.exports = register;