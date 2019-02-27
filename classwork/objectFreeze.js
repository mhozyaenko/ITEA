let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
        bonuses: ['cookies', 'great look'],
        aaa: {
            a: 1,
            b: 3
        }
    }
};


const work = () => {
   let frozenUniverse = Object.freeze(universe);
    // frozenUniverse.infinity = "jjj";
    // frozenUniverse.newProp = 15;
    // frozenUniverse.evil.human = "kkk";
    // console.log(frozenUniverse);

   let deepFreeze = obj => {
       let properties = Object.getOwnPropertyNames(obj);
       properties.forEach(item => {
           if (typeof(obj[item])=="object" && !(obj[item] instanceof Array)) {
               Object.freeze(obj[item]);
               deepFreeze(obj[item]);
           };
       });
       return obj;
    }

    let deepFrozen = deepFreeze(frozenUniverse);
    // deepFrozen.infinity = "jjj";
    // deepFrozen.newProp = 15;
    // deepFrozen.evil.human = "kkk";
    // deepFrozen.evil.aaa.a=10;
    console.log(deepFrozen);

}

export default work;
