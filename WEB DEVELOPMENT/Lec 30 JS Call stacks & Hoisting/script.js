//Var Hoisting
// console.log(age);
// var age = 22;


//Hoisting function
// sayMyName("Vaibhav");

// function sayMyName(finalName) {
//     console.log(finalName);
// }

//using let and const -> not work var hoisting
let age = 22;
// console.log(age);


//using function expression -> not work function hoisting
// sayHello();
// let sayHello = function() {
//     console.log("Hello Friends");
// }

//class hoisting -> not going to work
// const object1 = new Human();
// class Human {

// }


//Function Class Citizens
function greetMe(greet, fullName) {
    console.log("hello ", fullName);
    greet();
}
function greet() {
    console.log("Greeting for the day");  //function by call function
}
greetMe(greet, "Vaibhav Dutta");

