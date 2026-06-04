const register=require('./register');
let user1=register("abc","a@gmail.com","1234");
console.log(user1);
let user2=register("","x@gmail.com","4545");
console.log(user2);