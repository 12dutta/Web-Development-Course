
//Global scope -> isme agar varible create karte h koi bhi keyword(let, var, const) se toh usse kahi bhi access kar skte h
// var age = 22;
// console.log(age);

// {
//     console.log(age);
// }

// if(true) {
//     console.log(age);
// }

// for(let i=0; i<2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log(age);
// }
// sayHello();

//Inn sare tarike me chalega


//Function scope -> keval { } ke ander hi acces kar skte hai variable ko
// function sayName() {
//     var fullName = "Vaibhav Dutta";
//     console.log("Enpower", fullName);
// }
// console.log(fullName);
// sayName();


//Block scope
// {
//     const height  = 170; // let or const block scope h
// }
// console.log(height);

// console.log(naam);
// {
//     var naam = "biitutu"; // var block scope nahi h
// }
// console.log(naam);



//Temporal dead zone
console.log(mark);
console.log("vaibhav");
console.log("dutta");  //line 48 se 51 tak temporal dead zone hai hum mark ki value ko access nahi kar skte hai (let aur const me hi)
let mark = 100;
console.log(mark);



//Best  Practice -> let or const se hi variable bnaya karo code ki predictability bani rahegi