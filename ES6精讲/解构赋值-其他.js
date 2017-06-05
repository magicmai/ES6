//解构赋值的其他用法

var len = "Hi!".length;
console.log(len); //3

//解构方式
let {length} = "Hi!";
console.log(length); //3

//解构字符串
let [a, b, c] = 'Hi!';
console.log(a, b, c); //H i !

//函数传参解构
// ==ES5=========================
var arr = [1, 2];
function test5(a, b) {
	console.log('a:', a);
	console.log('b:', b);
}
test5(arr[0], arr[1]);
// ==ES6=========================
var array = [10, 20];
function test6([c, d]) { //传参顺序仍然重要
	console.log('c:', c);
	console.log('d:', d);
}
test6(array);
//传入对象 顺序可换
var obj = {n: 200, m: 100};
function test66({m, n}) {
	console.log('m:', m);
	console.log('n:', n);
}
test66(obj);


var obj = {x: 1000};
function test666({x, y = 2}) { //y默认值为2
	console.log('x:', x);
	console.log('y:', y); 
}
test666(obj);