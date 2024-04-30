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
// function greetMe(greet, fullName) {
//     console.log("hello ", fullName);
//     greet();
// }
// function greet() {
//     console.log("Greeting for the day");  //function by call function
// }
// greetMe(greet, "Vaibhav Dutta");

// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }
// let ans = solve(4);  //returing the function ahese kar sakte hai
// let finalAns = ans(10);
// console.log(finalAns);


// const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//     function(a,b) {
//         return a*b;   //function ko ahese data struture me store kar skate hai
//     }, 
// ];
// let first = arr[1];
// let ans = first(5,10);
// console.log(ans);

let obj = {
    age: 23,
    wt: 76,
    ht: 170,
    greet: () => {
        console.log("Heloo guys");
    }
}
console.log(obj.wt);
obj.greet();
