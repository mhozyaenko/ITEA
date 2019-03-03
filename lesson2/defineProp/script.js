let superPowers = [
    { name:'Invisibility', spell: function(){ return `${this.name} hide from you`} },
    { name:'superSpeed', spell: function(){ return `${this.name} running from you`} },
    { name:'superSight', spell: function(){ return `${this.name} see you`} },
    { name:'superFroze', spell: function(){ return `${this.name} will froze you`} },
    { name:'superSkin',  spell: function(){ return `${this.name} skin is unbreakable`} },
];

class SuperDude {
    constructor(name, superPowers) {
        this.superPowers = superPowers;
        Object.defineProperty(this, "name", {value: name});
    }
    superPower() {
        this.superPowers.forEach(item => {
            Object.defineProperty(this, item.name, {value: new Spell(item.name, item.spell).spell} );
        });
    }
}

class Spell {
    constructor(name, spell) {
        this.name = name;
        this.spell = spell.bind(this);
    }
}

let luther = new SuperDude("Luther", superPowers);
luther.superPower();
luther.name = "something else";
console.log(luther);
console.log(luther.Invisibility());
console.log(luther.superSpeed());
console.log(luther.superSight());
console.log(luther.superFroze());
console.log(luther.superSkin());