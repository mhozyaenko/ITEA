class Planet {
    constructor(name) {
        this.name = name;
        this.population = this.random(1000, 10000);
        Object.defineProperty(this, "populationMultiplyRate", {
            value: this.random(1, 10)
        });
        this.rotatePlanet = this.rotatePlanet.bind(this);
    }
    random = (min, max) => Math.floor(Math.random()*(max - min)) + min;
    rotatePlanet() {
        let randomNumber = this.random(1, 1000);
        if ( (randomNumber % 2) == 0) {
            this.growPopulation();
        } else {
            this.cataclysm();
        }
    }
    growPopulation() {
        this.population += this.populationMultiplyRate*100;
        console.log(`planet population grows ${this.populationMultiplyRate*100}.`);
    }
    cataclysm() {
        let dead = this.random(1, 10)*10000
        this.population -= dead;
        console.log(`Cataclysm!!! ${dead} humans died.`);
    }


}
let myPlanet = new Planet('myPlanet');
console.log(myPlanet);
for (let i=0; i<10; i++) {
    myPlanet.rotatePlanet();
    }