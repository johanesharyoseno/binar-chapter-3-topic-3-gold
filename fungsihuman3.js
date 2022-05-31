class Human {
    constructor (name,address) {
        this.name = name;
        this.address = address;
    }
#doGossip = () => {
console.log (`my addres will become viral ${this.address}`)
}
talk () {
    console.log (this.#doGossip());
}
//static #isHidingArea = true;
}

let mj = new Human ("michael jackson", "isekai");
console.log (mj.talk());

/*try {
    Human.#isHidingArea;
    mj.#doGossip ();
}
catch (err) {
    console.log (err)
} */