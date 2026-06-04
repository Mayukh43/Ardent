const userd = async () => {
    const user = await Promise.resolve({ name: "Abc", course: "Python" });
    console.log(user);
};

module.exports = userd;
