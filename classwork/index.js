import work from './objectFreeze';
import government from './singleton';

work();

government.addLaw(2, 'newLaw', 'someNewLaw');
console.log(government.readConstitution());
console.log(government.readLaw(2));
console.log(government.showSatiasfaction());
government.holiday();
console.log(government.showBudget());
console.log(government.showSatiasfaction());