// // Class
// class Human {
//     //properties
//     Age = 22;    //public
//     #Weight = 76; //private-> # se hum private kar skte h
//     Height = 170;

//     //constructor
//     constructor(newage, newheight, newweight) {
//         this.Age = newage;
//         this.Height = newheight;
//         this.#Weight = newweight;
//     }

//     //behaviour
//     walking () {
//         console.log("I am Walking ", this.#Weight); //using dot current variable ka ye wala part access kar rahe ho
//     }
//     running() {
//         console.log("I am Running");
//     }
//     get fetchWeight() {
//         return this.#Weight;
//     }
//     set modifyWeight(val) {
//         this.#Weight = val;
//     }

// }
// //Object
// let obj = new Human(43, 189, 500);
// console.log(obj.fetchWeight); //yha par #weight ko use karke syntax error throw karta hai
// obj.walking();


//default parameter
// function sayName(fName = "Bablu", lName = "Bhai") {    //default value assign kar di
// function sayName(fName = "Bablu", lName = fName.toUpperCase()) {    
//     console.log("My name is: ", fName, lName);
// }
// sayName();

function solve(value = {age:22,wt:76,ht:175}) { //hum default object bhi pass kar skte h, or array bhi pass hote
    console.log("Hello Bhai:", value);
}
solve(undefined);
