//Proxy(代理)

// var user = {};
// user.fname = 'Joe';
// user.lname = 'Wood';

//full_name = user.fname +  ' ' + user.lname;
// var full_name = `${user.fname} ${user.lname}`;
// console.log(full_name);


// var user = {
// 	full_name: function() {
// 		return this.fname + ' ' + user.lname;
// 	}
// }
// user.fname = 'Joe';
// user.lname = 'Wood';
// console.log('user.full_name():', user.full_name());

//传参2个：原对象，配置项
var user = new Proxy({}, {
	get: function(obj, prop) {
		switch(prop) {
			case 'full_name':
			return obj.fname +  ' ' + obj.lname;
		}	
	},
	set: function(obj, prop) {
		//
	}
});

user.fname = 'Joe';
user.lname = 'Wood';
console.log('user.full_name:', user.full_name); //user.full_name: Joe Wood