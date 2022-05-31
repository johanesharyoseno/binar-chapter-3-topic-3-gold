class Human {
    constructor (name, address) {
        this.name = name;
        this.address = address;
    }
introduce () {
    console.log (`hello, my name is ${this.name}`);
}
work () {
    console.log (`${this.name} is working`);
}
}

class Police extends Human {
    constructor (name, address, rank) {
        super (name, address);
        this.rank= rank;
    }
work () {
    console.log (`${this.name} is enforcing law`);
}
}

class Doctor extends Human {
    constructor (name, address, specialist) {
        super (name,address);
        this.specialist=specialist;
    }
work (patientNumber) {
    console.log (`${this.name} is treating ${patientNumber} patients`);
}
}

let binarian = new Police ('binarian', 'jogja', 'captain');
let sabrina = new Doctor ('sabrina', 'bsd' , 'general');

binarian.work ();
sabrina.work (10);