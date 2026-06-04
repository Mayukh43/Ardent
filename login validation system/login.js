function login(email,password) {
    if(email=="mr@gmail.com" && password=="1234") {
        return "Login Successful";
    } else {
        return "Login Fail";
    }
}

module.exports = login;