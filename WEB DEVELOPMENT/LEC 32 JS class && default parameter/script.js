// Class
class Human {
    //properties
    Age = 22;    //public
    #Weight = 76; //private-> # se hum private kar skte h
    Height = 170;

    //behaviour
    walking () {
        console.log("I am Walking ", this.#Weight); //using dot current variable ka ye wala part access kar rahe ho
    }
    running() {
        console.log("I am Running");
    }
    get fetchWeight() {
        return this.#Weight;
    }
    set modifyWeight(val) {
        this.#Weight = val;
    }

}
//Object
let obj = new Human();
// console.log(obj.#weight); //yha par #weight ko use karke syntax error throw karta hai
obj.walking();