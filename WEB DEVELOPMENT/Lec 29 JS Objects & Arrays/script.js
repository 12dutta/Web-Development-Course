// let obj = {
//     name: "Vaibhav",
//     age: 22,
//     weight: 76,
//     height: "5ft 7inch",
//     greet: function() {
//         console.log("Hello Guys");
//     }
// };
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
let arr = [10,20,30,11,43,24,51,38];
let evenArray = arr.filter((number) => {
    return number%2 === 0;
    // if(number%2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
});
// console.log(evenArray);

let crr = [1,3,'vaibhav','Bablu',true,null];
let string = crr.filter((value) => {
    // return (typeof(value) === 'string');
    if(typeof(value) == 'number'){
        return true;
    }
    else {
        return false;
    }
});
console.log(string);