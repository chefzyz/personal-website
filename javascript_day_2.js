var myName = "Azeez";
function printmyName(){
	console.log(myName);
}



// Local Scope

var z = 3;

function some_f(z){
	console.log(z)
}

some_f(10)



// JavaScript Cheatsheet

// This is an example of a Global scope
// Globacl scope can be accessed from anywhere in the code

var numSelect = 3;
function printnumSelect(){
	alert(numSelect);
}
numSelect();

// This is an example of Local Scope


// =========================================

// Problem: Validate a form's field
//------------------------------------

// Create a placeholder for the form's value

var formValue = "Jason";


// Create a form that takes in user input

var userInput = prompt("What is your name?");

// Check if user inputs equals to form value

if( userInput == formValue);
// If user input equals form value, proceed to the next task

console.log("You've entered the right answer")

// If user input is different from form value, notify user of error

else{
	console.log("You've entered the wrong answer")
}



var formValue = "Jason";
var userInput = prompt("What is your name?");
if( userInput == formValue){
console.log("You've entered the right answer")	

//