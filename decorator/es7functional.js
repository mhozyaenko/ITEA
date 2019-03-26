const es7 = () => {

  function number({target, key, descriptor}) {
    const originFn = descriptor.value;
    descriptor.value = function (...args) {
      [...args].map(arg => Number(arg));
      let value = originFn(...args);
      if (isNaN(value)) {
        console.error('can not operate arguments:', ...args)
      } else {
        return value
      }
    }
  }

  class CoolMath {
    @number
    addNumbers(a, b) {
      return a + b;
    }

    @number
    multiplyNumbers(a, b) {
      return a * b
    }

    @number
    minusNumbers(a, b) {
      return a - b
    }
  }
  let Calcul = new CoolMath();
  let x = Calcul.addNumbers(2, 2)
  let y = Calcul.multiplyNumbers("10", "2");
  let z = Calcul.minusNumbers('ten', 2)
  console.log('x', x)
  console.log('y', y)
  console.log('z', z)

};

export default es7;
