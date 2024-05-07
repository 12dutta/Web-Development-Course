//compile time error
// console.log(1;  //syntax error

//runtime error
// console.log(x);  //undefined-> reference error


//Handling-> try -catch block
try {
    console.log("Try block start here: ")
    console.log(x); 
}
catch(e) {
    console.log("I am inside the catch block");
    console.log("Your error is here: ", e);
}