class Human {
    constructor (name, address) {
        this.name = name;
        this.address = address;
    }
introduce () {
    console.log (`hi, my name is ${this.name}`)
}
work () {
    console.log ("work!")
}
}

class Programmer extends Human {
    constructor (name, address, programmingLanguage){
        super (name,address);
        this.programmingLanguage = programmingLanguage;
    }
    introduce () {
        super.introduce();
        console.log (`I can write`, this.programmingLanguage);
    }
code () {
    console.log ("code some",
    this.programmingLanguage [Math.floor (Math.random()*
    this.programmingLanguage.length)]);
}
}

let jo = new Programmer (`jo`, `bsd`, `javascript`);
jo.introduce();
jo.work();
jo.code ();