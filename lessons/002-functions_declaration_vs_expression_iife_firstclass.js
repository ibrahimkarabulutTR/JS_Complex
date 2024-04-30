// FUNCTIONS

// 1- Function Declaration or Statement

/*
function square(num) {
	return (num * num);
}

square(5); // Argument
console.log(square(5));

console.log(square); // () --> Invoke

console.log(square(6)); // Function Declaration --> HOISTED
*/



// 2- Function Expression --> NOT HOISTED --> can be anonymous

/*
const square = function (num) {
	return (num * num);
}
*/

// Func name is optional

/*
console.log(square);
console.log(square(9));
*/

// FIRST - CLASS FUNCTIONS

/*
const myArr = [6, "Arin", function() {console.log("Array Element");}]

myArr[2]();

const myObj = {
	age: 5,
	name: "Arin",
	func: function() {console.log("Object Element");}
}

myObj.func();

console.log(20 + (function() {return 10;})()); // IIFE
*/

/*
const addFive = function(num, func) {
	console.log(num + func());
}

addFive(10, function(){return 15;});
*/

/*
const myFunc = function(num){
	return function toDouble(){
		console.log(num * 2);
	}
}

myFunc(25)();
*/

// IIFE -> Immediately Invocable Function Expression

const sum = function() {
	console.log(5+12);
}()

// its means create and run the function just one time

(function(){
	console.log(5+25);
})();

// this too