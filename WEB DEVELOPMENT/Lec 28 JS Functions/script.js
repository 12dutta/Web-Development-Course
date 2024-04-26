// function sayMyName () {  //function defining only
//     console.log("Vaibhav")
// }
// sayMyName();  //function ko use- fuction call se karenge

// function printCounting () {
//     for(let i=0; i<=50; i++) {
//         console.log(i);
//     }
// }
// printCounting();

// function with parameter
function printNumber(num) {
    console.log("printing number: ", num);
}
printNumber(34);

// function with multiple parameter
// function getAverage(num1, num2) {
//     let avg = (num1 + num2)/2;
//     console.log("Average: ", avg);
// }
// getAverage(3,70);

// Return functions
// function getSum(a,b,c) {
//     let sum = a+b+c;
//     return sum;
// }
// let ans = getSum(1,2,3);
// console.log("printing sum: ", ans);

function getMyName(firstname, lastname) {
    let fullName = firstname + " " + lastname;
    return fullName;
    //unreachble statement -> return ke niche likhe code kabhi bhi run nahi hoga
    // let a = 3;
    // let b = 3;
    // let sum = a+b;
    // console.log (sum);
}
// let ans = getMyName("Vaibhav", "Dutta");
// console.log("Full Name: ", ans);



//another way to create function with variables
// const getMultiplication = function(a, b) {
//     return a*b;
// }
// console.log(getMultiplication(3,20));


const getSquare = function (num) {
    // let ans = num**2;
    return(num**2);
}
console.log(getSquare(5));



//Arrow function with => symbol
let getExp = (x,y) => {
    let exp = x**y;
    return exp;
}
console.log(getExp(2,10));



