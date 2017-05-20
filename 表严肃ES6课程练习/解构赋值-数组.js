//变量的解构赋值（数组）

// ==ES5=============================
var a = 1, b = 2, c = 3;

// ==ES6=============================
var [d, e, f] = [4, 5, 6];
var [g, [h, i]] = [7, [8, 9]];

var [j, , l] = [1, 2, 3];
console.log('j:', j); //j:1
console.log('l:', l); //l:3
//console.log('k:', k); //k is not defined

var [m, ...n] = [4, 5, 6];
console.log('m:', m); //m:4
console.log('n:', n); //n:[5, 6]

var [o, p, q='default', r='default'] = [7, 8, 9];
console.log('o:', o); //o:7
console.log('p:', p); //p:8
console.log('q:', q); //q:9
console.log('r:', r); //r:default


var arr = [1, 2, 3];
// ==ES6=============================
var [s, t, u='default', v='default'] = arr;
// ==ES5=============================
var s = arr[0];
var t = arr[2];
var u = arr[3];
if (arr[3]) {
	var v = arr[3];
}
else {
	var v = 'default';
}


let [x, y, z] = [1, 2];
console.log('z:', z); //z: undefined
let [x1, y1, z1] = [1, 2, null];
console.log('z1:', z1); //z: null