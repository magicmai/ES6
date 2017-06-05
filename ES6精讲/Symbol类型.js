//Symbol类型 (?)

// ==ES5================
//boolean
//number
//srting
//undefined
//null
//object

// ==ES6================
//symbol 符号

//file1
let name = Symbol();
{
	var person = {};
	person[name] = 'File1';
}

//file2
{
	person['name'] = 'File2';
}

console.log('person:', person); //{name: "file2", Symbol(): "file1"}


// ==============================
//file1
let name1 = Symbol();
{
	var person1 = {};
	person1[name1] = 'File1';
	console.log('person1[name1]:', person1[name1]);//person1[name1]: File1
}

//file2
{
	let name1 = Symbol();
	person1[name1] = 'File2';
	console.log('person1[name1]:', person1[name1]); //person1[name1]: File2
	console.log('person1:', person1);
	//{Symbol(): "File1", Symbol(): "File2"}
}

console.log('person1[name1]:', person1[name1]); //person1[name1]: File1
