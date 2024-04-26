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
function getSum(a,b,c) {
    let sum = a+b+c;
    return sum;
}
let ans = getSum(1,2,3);
console.log("printing sum: ", ans);

