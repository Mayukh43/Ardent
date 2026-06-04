const login = async (email, password) => {
    try {
        const valid = { email: "a@gmail.com", password: "1234" };

        const response = await Promise.resolve(
            email==valid.email && password==valid.password
                ? "Login Successful"
                : "Invalid Email or Password"
        );

        console.log(response);
    } catch (error) {
        console.log("Login Failed");
    }
};

module.exports = login;