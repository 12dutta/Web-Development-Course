// Class
class Human {
    //properties
    Age = 22;    //public
    #Weight = 76; //private-> # se hum private kar skte h
    Height = 170;

    //behaviour
    walking () {
        console.log("I am Walking");
    }
    running() {
        console.log("I am Running");
    }
}
//Object
let obj = new Human();
console.log(obj.#weight);
obj.walking();