//set

var arr = [1, 2, 3, 3];

var s = new Set([1, 2, 3, 3]); // 去重
console.log(s); // {1, 2, 3}
console.log(s instanceof Object); // true

console.log(s.size); // 3

s.add(4);
console.log(s); // {1, 2, 3, 4}

s.delete(2);
console.log(s); // {1, 3, 4}

s.has(5);
console.log(s.has(5)); // false
console.log(s.has(1)); // true

s.clear();
console.log(s); // {}
