/*
	let age = 40;
	console.log(age);

	age = 43;
	console.log(age);

	const name = 'İbrahim';
	console.log(name);
	// we cant change const variable value
	// you cant make a valueless cons variable
*/

/*
	let str = '';
	for(let i=0; i<10; i++){
		str = str.concat(i);
		console.log(str);
	}
*/

/*
	const myArr = [1,2,3];
	console.log(myArr);

	myArr.pop();
	console.log(myArr);

	const student = {
		name: 'İbrahim',
		age: 24
	}
	console.log(student);

	student.name = 'Halil İbrahim';
	console.log(student);

	// you cant use like that
	// student = {
	// 	name: 'Halil İbrahim',
	// 	age: 24
	// }

	// if you want to block to change object values
	Object.freeze(student);
	student.name = 'İbrahim';
	console.log(student);
*/

/*
	// VAR --> global scope / functional scope
	var x = 1;
	console.log(x);

	if(x === 1){
		var x = 10;
		console.log(x);
	}

	console.log(x);

	// LET --> block scope
	let y = 1;
	console.log(y);

	if(y === 1){
		let y = 10;
		console.log(y);
	}

	console.log(y);
*/

/*
	var x = 10;
	console.log(window);
	console.log(window.x);

	let y = 10;
	console.log(window);
	console.log(window.y);
*/

/*
	// HOISTING --> Checks whether the variable exists only var
	// var x;
	console.log(x);
	var x = 10;

	// console.log(y);
	// let y = 10;
*/