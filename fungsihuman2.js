class Human {
    constructor (name,address) {
        this.name = name;
        this.address = address;
    }
    introduce () {
        console.log (`hello, my name is ${this.name}`)
    }
static isEating (food) {
    let foods = ['plant', 'animal'];
    return foods.includes (food.toLowerCase()); 
}
}

let mj = new Human ("michael jackson", "isekai");
console.log (mj);
console.log (mj.introduce());
console.log (Human.isEating("plant"))
console.log (Human.isEating("human"))