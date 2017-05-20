//模板字符串

// ==ES5=====================
var user = '伍圆';
var content = '<div>' + '<p>' + '总金额：' + user + '</p>' + '</div>'; 
console.log(content); //<div><p>总金额：伍圆</p></div>

// ==ES6=====================
var name = '陆圆';

let tpl = ` 
	<div>
		<p>总金额：${name + `
			<span>${'整'}</span>
		`}</p>
	</div>
	`; //保留隔行和空格
console.log(tpl);
//
	//<div>
	//    <p>总金额：陆圆
	// 		  <span>整</span>
	// 	  </p>
	//</div>
//

let tpls = `<div><p>总金额：${name}</p></div>`;
console.log(tpls); //<div><p>总金额：陆圆</p></div>