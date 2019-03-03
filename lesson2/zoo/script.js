class Zoo {
    constructor(name) {
        this.name = name;
        this.animalCount = 0;
        this.zones = {
            mammals: [],
            birds: [],
            fishes: [],
            reptile: [],
            others: []
        }
        this.addAnimal = this.addAnimal.bind(this);
        this.removeAnimal = this.removeAnimal.bind(this);
        this.getAnimal = this.getAnimal.bind(this);
        this.countAnimals = this.countAnimals.bind(this);
    }
    addAnimal = animal => {
        this.animalCount ++;
        (animal.zone) ? this.zones[animal.zone].push(animal) : this.zones.others.push(animal);
    }
    removeAnimal = name => {
        this.animalCount --;
        for (let item in this.zones) {
            let arr = this.zones[item];
            if (arr.find(elem => elem.name === name))
                arr.splice(arr.indexOf(arr.find(elem => elem.name === name)), 1);
        }
    }
    getAnimal = (type, value) => {
        let result = [];
        for (let item in this.zones) {
            let arr = this.zones[item];
            result = [...result, ...arr.filter(item => item[type] === value)];
        }
        return result;
    }
    countAnimals = () => {
        let count = 0;
        for (let item in this.zones) {
            let arr = this.zones[item];
            count += arr.length;
        }
        return count;
    }
}
class Animal {
    constructor(name, foodType) {
        this.name = name;
        this.foodType = foodType ? 'carnivore' : 'herbivore';
        this.eatSomething = this.eatSomething.bind(this);
    }
    eatSomething = (portion) => {
        let meal = (this.foodType === 'carnivore') ? 'meat' : 'carrot';
        console.log(`${this.name} eats ${portion} kg of ${meal}.`);
    }
}
class Mammal extends Animal {
    constructor(name, type, foodType, speed) {
        super(name, foodType);
        this.type = type;
        this.zone = 'mammals';
        this.speed = speed;
        this.run = this.run.bind(this);
    }
    run = () => console.log(`${this.name} run with the speed ${this.speed} km/h`);
}
class Bird extends Animal {
    constructor(name, type, foodType, speed) {
        super(name, foodType);
        this.type = type;
        this.zone = 'birds';
        this.speed = speed;
        this.fly = this.fly.bind(this);
    }
    fly = () => console.log(`${this.name} fly with the speed ${this.speed} km/h`);
}
class Fish extends Animal {
    constructor(name, type, foodType, speed) {
        super(name, foodType);
        this.type = type;
        this.zone = 'fishes';
        this.speed = speed;
        this.swim = this.swim.bind(this);
    }
    swim = () => console.log(`${this.name} swim with the speed ${this.speed} km/h`);
}
class Reptile extends Animal {
    constructor(name, type, foodType, speed) {
        super(name, foodType);
        this.type = type;
        this.zone = 'reptile';
        this.speed = speed;
        this.crawl = this.crawl.bind(this);
    }
    crawl = () => console.log(`${this.name} crawl with the speed ${this.speed} km/h`);
}
let myZoo = new Zoo('MyZoo');
let rex = new Mammal('Rex', 'wolf', true, 20);
let twittie = new Bird('Twittie', 'parrot', false, 15);
let nemo = new Fish('Nemo', 'dolphin', true, 10);
let lala = new Fish('Lala', 'dolphin', true, 12);
let naga = new Reptile('Naga', 'cobra', true, 7);
let dex = new Mammal('Dex', 'dolphin', true, 18);
myZoo.addAnimal(rex);
myZoo.addAnimal(twittie);
myZoo.addAnimal(nemo);
myZoo.addAnimal(naga);
myZoo.addAnimal(dex);
myZoo.addAnimal(lala);
myZoo.removeAnimal('Naga');
console.log(myZoo);
rex.run();
rex.eatSomething(20);
naga.crawl();
naga.eatSomething(4);
console.log(myZoo.getAnimal('name', 'Twittie'));
console.log(myZoo.getAnimal('type', 'dolphin'));
console.log(myZoo.countAnimals());