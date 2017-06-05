//const为constant简写
//块级作用域
const MY_NAME = "Magic"; //定义常量，必须声明和赋值同在!
console.log(MY_NAME);


//object
let user = {
	name:"Kate", 
	age:12
};
//const NAME = user;
//console.log("user:", user); //SyntaxError: Identifier 'user' has already been declared

const NAME = user; //这里的不变的是指指向对象user的指针，指向id user
console.log("user:", user); //user: {name: "Kate", age: 12}
user.age = 15;
console.log("user:", user); //user: {name: "Kate", age: 15}