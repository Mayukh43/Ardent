const base = { name: "Abc", email: "a@gmail.com" };
const extra = { course: "Python", country: "India" };

const mergedp = { ...base, ...extra };

module.exports = mergedp;