
//Global scope -> isme agar varible create karte h koi bhi keyword(let, var, const) se toh usse kahi bhi access kar skte h
var age = 22;
console.log(age);

{
    console.log(age);
}

if(true) {
    console.log(age);
}

for(let i=0; i<2; i++) {
    console.log(age);
}

function sayHello() {
    console.log(age);
}
sayHello();

//Inn sare tarike me chalega