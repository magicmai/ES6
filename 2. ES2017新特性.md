# ES2017新特性

**Object.values()**

**onject.entries()**

```
Object.values({prop1: 1, prop2: 2});  // [1, 2]

Object.entries({prop1: 1, prop2: 2});  // [["prop1", 1], ["prop2", 2]]
```

**.padStart(maxLength, [padValue])**

**.padEnd(maxLength, [padValue])**

```
"word".padStart(10, " ");  // "      word"
//用于设置时间格式
"12".padStart(2, "0");  // 12
"9".padStart(2, "0");  // 09

//.padEnd() 同理
```

**Object.getOwnPropertyDescriptors()**

```
var x = {prop1: 1, prop2: 2};
Object.getOwnPropertyDescriptors(x);
/*
 * {
 *      prop1: {value: 1, writable: true, enumerable: true, configurable: true},
 *      prop2: {value: 2, writable: true, enumerable: true, configurable: true}
 *  }
 */
```

**Trailing commas in function  arguments**

```
console.log("word",);  // "word"
```

**Async Function (async await)**

**Shared Memory & Atomics:**

- SharedArrayBuffer
- Atomics
