let src = {
    age: 22,
    wt: 76,
    ht: 179
};
//Iteration
let dest = {};
for(let key in src) { //cloning
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] =newValue;
};
src.age = 34;
console.log("src: ", src);
console.log("dest: ", dest);



//Assign
// let src2 = {
//     value:101,
//     name:"vaibhav dutta"
// };
// src.age = 34;
// let dest = Object.assign({}, src, src2);
// console.log("src: ", src);
// console.log("dest: ", dest);



//Spread operator
// let dest = {...src};
// src.age = 34;
// console.log("src: ", src);
// console.log("dest: ", dest);

// console.log(obj);
// obj.color = "white";
// console.log(obj);
