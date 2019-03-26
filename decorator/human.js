const BeachParty = () => {
  class Human {
    constructor(name) {
      this.name = name;
      this.currentTemperature = 10;
      this.minTemperature = 0;
      this.maxTemperature = 50;
      console.log(`new Human ${this.name} arrived!`);
    }

    changeTemperature(changeValue) {
      console.log('current', this.currentTemperature + changeValue,
        'max', this.maxTemperature
      );
      let prevTemperature = this.currentTemperature;
      this.currentTemperature += changeValue;

      if (this.currentTemperature < this.minTemperature) {
        console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} froze to death :(`);
      } else {
        if (this.currentTemperature > this.maxTemperature) {
          console.log(`Temperature is to high: ${this.currentTemperature}. ${this.name} roasted on the sun :(`)
        } else {
          if (this.currentTemperature > prevTemperature) {
            console.log(`It's hot outside (${this.currentTemperature} deg), please take some coolers or ${this.name} will die!`)
          } else {
            console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);
          }
        }
      }
    }
  }

  class HumanWithCoolers extends Human {
    constructor(name) {
      super(name);
      this.coolers = [
        {
          name: 'ice-cream',
          temperatureCoolRate: -5
        },
        {
          name: 'juice',
          temperatureCoolRate: -7
        }];
    }

    addCooler(cooler) {
      (cooler.name && cooler.temperatureCoolRate) ? this.coolers.push(cooler)
        : console.log('cooler is not valid');
    }

    changeTemperatureWithCooler(changeValue) {
      this.changeTemperature(changeValue);
      if (this.currentTemperature > 30 && this.currentTemperature < 50) {
        if (this.coolers.length > 0) {
          let usedCooler = this.coolers[0];
          this.currentTemperature += usedCooler.temperatureCoolRate;
          console.log(`Human ${this.name} used ${usedCooler.name}. Temperature: ${this.currentTemperature}`);
          this.coolers.splice(0, 1);
        } else {
          console.log('Oops! No more coolers to use...');
        }
      }
    }
  }

  let Alisa = new HumanWithCoolers('Alisa');
  Alisa.changeTemperatureWithCooler(30);
  Alisa.changeTemperatureWithCooler(5);
  Alisa.addCooler({name: 'lemon'});
  Alisa.changeTemperatureWithCooler(5);
  Alisa.addCooler({name: 'ice', temperatureCoolRate: -10});
  Alisa.changeTemperatureWithCooler(15);
}

export default BeachParty;