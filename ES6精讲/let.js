// var定义的变量可以是全局变量 或局部变量
// let定义的变量只在块作用域中有效
var a = 1; 
let b = 2;
console.log("a:", a); // a:1
console.log("b:", b); // b:2


// ====================================
if(2){
	var c = 2;
	let d = 4;
	console.log("d:", d); // d:4
}
console.log("c:", c); // c:2
//console.log("d:", d); // d is not defined


// ====================================
for (var i = 0; i < 5; i++) {
  console.log("i:", i);	 // 0 1 2 3 4
}
console.log("i:", i); // 5 (仍存在全局中，未被销毁)

for (let j = 0; j < 5; j++) {
  console.log("j:", j);	 // 0 1 2 3 4
}
//console.log("j:", j); // j is not defined (已销毁)


// ====================================
var e = 10;

// function foo() {
// 	console.log("e:", e);
// }
// foo(); // e:10

function foo() {
	if (false) {
		var e = 20;
	}
	console.log("e:", e);
}
foo(); // e: undefined 变量提升的原因

let f = 10;
function bar() {
	if (false) {
		let f = 20;
	}
	console.log("f:", f);
}
bar(); // f:10