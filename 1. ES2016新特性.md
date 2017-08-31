# ES2016(ES7)新特性

>参考：[The final feature set of ECMAScript 2016 (ES7)](http://2ality.com/2016/01/ecmascript-2016.html)

### 1. Array.prototype.includes(value : any) : boolean

Examples:
```
['a', 'b', 'c'].includes('a');
// true
['a', 'b', 'c'].includes('d');
// false
```

### 2. exponentiation operator (**)，求幂运算符

类似：
```
Math.pow(3, 2); // 9
```

Examples:
```
let squared = 3 ** 2; // 9

let num = 3;
num **= 2;
console.log(num); // 9
```
