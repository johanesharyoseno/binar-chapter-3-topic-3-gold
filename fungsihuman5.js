class Human {
    constructor (name, address) {
        if (this.constructor === Human) {
            throw new Error (`Cannot instantiate from abstract class`);
        }
        this.name = name;
        this. address = address;
    }
    introduce () {
        console.log (`hello, my name is ${this.name}`);
    }
    work () {
        throw new Error ("cannot call abstract method");
    }
}

class Police extends Human {
    constructor (name,address, rank) {
        super (name,address);
        this.rank = rank;
    }
work () {
    console.log ("enforcing law");
}
}

class Doctor extends Human {
    constructor (name, address, specialist) {
        super(name,address);
        this.specialist = specialist;
    }
work () {
    console.log ("treat patient");
}
}

function goToWork (human) {
    return human.work();
}

let binarian = new Police ("binarian", "jogja", "captain");
let sabrina = new Doctor ("sabrina", "tangerang", "general");

goToWork(binarian);
goToWork (sabrina);