// Add your Circle class here

// class Bird {
//     #phrase
//     constructor(name){
//         this.name = name;
//     }
//     set phrase(phrase){
//         this.#phrase = phrase;
//     }
//     get speak(){
//         return `${this.name} is a bird that speaks ${this.#phrase}`
//     }
// }
// let bird1 = new Bird("Parrot")
// console.log(bird1.speak)
// bird1.phrase = "squaks"
// console.log(bird1.speak)


class Circle{

    constructor(radius){
        this.radius = radius;

    }
    get diameter(){
        return this.radius * 2
    }
    set diameter(diameter){
        this.radius = diameter / 2
    }
    get circumference(){
        return this.radius * 2 * Math.PI
    }
    set circumference(circumference){
        this.radius = circumference / (2 * Math.PI)
    }
    get area(){
        return this.radius * this.radius * Math.PI
    }
    set area(area){
        this.radius = Math.sqrt(area/ Math.PI)
    }
}
