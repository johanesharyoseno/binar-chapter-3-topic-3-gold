class Human {
    //menambahkan constructor
constructor (name, address){
    this.name = name;
    this.address = address;
}
//menambahkan static property
static isLivingOnEarth = true

//menambahkan instance method
introduce () {
    console.log (`hi, my name is ${this.name}`);
}
}

//output dari static property: true
console.log (Human.isLivingOnEarth);

//menambahkan property / instance method
Human.prototype.greet = function (name) {
    console.log (`hi, ${name}, i'm ${this.name}`);
}

//menambahkan static method
Human.destroy = function (thing) {
    console.log (`Human is destroying ${thing}`);
}

//membuat object dengan class Human
let mj = new Human ('Michael Jackson', 'America');

//output: Human {name : 'Michael Jackson', address: 'America'}
console.log (mj);

//mengecek jika object adalah instance dari class, output: true
console.log (mj instanceof Human)

//output: hi, Donald Trump, i'm Michael Jackson
mj.greet ("Donald Trump");

//output: Human is destroying amazon forest
Human.destroy ("amazon forest")

