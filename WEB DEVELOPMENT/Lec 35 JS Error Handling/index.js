//compile time error
// console.log(1;  //syntax error

//runtime error
// console.log(x);  //undefined-> reference error


//Handling-> try -catch block
// try {
//     console.log("Try block start here: ")
//     console.log(x); 
// }
// catch(e) {
//     //isme define karte hai ki, error ke saath ky karna chate hai.
//     console.log("I am inside the catch block");
//     console.log("Your error is here: ", e);
// }
// finally{
//     console.log("I will run everytime, as I am finally block:")
// }


//let create customize error
// try{
//     console.log(x);
// }
// catch(e) {
//     throw new Error("Bhai phele declare toh kar,fir print karna:");
// }

let errorCode = 100;
if(errorCode == 100) {
    throw new Error("Invalid Json");
}