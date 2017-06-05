//变量的解构赋值（对象）

var obj = {
	a: 1,
	b: 2
}
let {a, b} = obj; //let {a:a, b:b} = obj;
console.log('a:', a); //a: 1
console.log('b:', b); //b: 2
let {c, d} = obj;
console.log('c:', c); //c: undefined
console.log('d:', d); //d: undefined

let {a:A, b:B} = obj;
console.log('A:', A); //A: 1
console.log('B:', B); //B: 2


var obj1 = {
	arr: [
		'Hi!',
		{
			m: 1
		}
	]
};
let {arr: [greet,{e}]} = obj1;
console.log('greet:', greet); //greet: Hi!
console.log('e:', e); // e: undefined


let {i=1, j=2} = {i: 10};
console.log('i:', i); //i: 10
console.log('j:', j); //j: 2


//重命名且赋值
let {m:M=1, n=2} = {m: 10};
console.log('M:', M); //M: 10
console.log('n:', n); //n: 2


//使用
let res = {
	status: 200,
	id: 12,
	data: [{name: 'Joe'}, {name: 'Jack'}]
}
// ==ES5=============================
//var status = res.status;
//var id = res.id;
// ==ES6=============================
let {status, id, data} = res;
if (status === 200) {
	//code
}


let {floor, pow} = Math;
let x = 1.9;
console.log('floor(x):', floor(x)); //floor(x): 1
console.log('pow(2, 3):', pow(2, 3)); //pow(2, 3): 8