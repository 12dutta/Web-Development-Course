// let obj = {
//     name: "Vaibhav",
//     age: 22,
//     weight: 76,
//     height: "5ft 7inch",
//     greet: function() {
//         console.log("Hello Guys");
//     }
// };


// //For In -> enumerable properties of object
// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }



// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

//creation of arrays
// let arr = [1,2,3,4,5];
//Arrays constructor
let brr = new Array('Vaibhav', 22, false);
brr.push('Dutta');
brr.push('25');
brr.push('30');
// brr.pop();
// brr.shift();
brr.unshift('Name');
// console.log(brr.slice(2,4));
brr.splice(1,3, 'Bablu');
// console.log(brr);



//Map function
// let arr = [10,20,30];
// arr.map((number, index) => {
//     console.log(number+1);
//     console.log(index);
// })
// let ansArray = arr.map((number) => {
//     return number*number;
// })
// console.log(ansArray);



//Filter function
// let arr = [10,20,30,11,43,24,51,38];
// let evenArray = arr.filter((number) => {
//     return number%2 === 0;
    // if(number%2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
// });
// console.log(evenArray);

// let crr = [1,3,'vaibhav','Bablu',22,true,null];
// let string = crr.filter((value) => {
    // return (typeof(value) === 'string');
//     if(typeof(value) == 'number'){
//         return true;
//     }
//     else {
//         return false;
//     }
// });
// console.log(string);



//Reduce function
// let arr = [10,20,30,40];
// let ans = arr.reduce((acc, curr) => { //acc->accumulator curr->current
//     return acc + curr;
// }, 0);
// console.log(ans);



//Sort
// let drr = [2,4,1,3,5,8];
// drr.sort();
// console.log(drr);
// console.log(drr.indexOf(3)); //index ko find karna ho toh



//For each
// let arr = [10,20,30];
// let length = arr.length;
// console.log("Lenght: ", length);
//traditional loop
// for(let index=0; index<length; index++) {
//     console.log(arr[index]);
// }
// arr.forEach((value, index) => {
//     console.log("Number: ", value, "Index : ", index);
// })




//For Of-> iterable object = array, string
// let arr = [10,20,30,40,50];
// for(let value of arr) {
//     console.log(value);
// }
// let fullName = "Vaibhav";
// for(let value of fullName) {
//     console.log(value);
// }


//Array with Function
let arr = [10,20,30,40,50];
function getSum(arr) {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
    // let len = arr.length;
    // let sum = 0;
    // for(let index=0; index<len; index++) {
    //     sum = sum + arr[index];
    // }
    // return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);
