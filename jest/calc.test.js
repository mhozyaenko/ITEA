import { Calc, add, SubCommand, MultiplyCommand, DivideCommand } from './calc.js';
import {AddCommand} from "./calc";

test('AddCommand test', ()=> {
   let calc = new Calc();
   calc.execute(new AddCommand(2));
   expect(calc.currentValue).toBe(2);
});
test('SubCommand test', ()=> {
   let calc = new Calc();
   calc.currentValue = 3;
   calc.execute(new SubCommand(1));
   expect(calc.currentValue).toBe(2);
});
test('MultiplyCommand test', ()=> {
   let calc = new Calc();
   calc.currentValue = 2;
   calc.execute(new MultiplyCommand(2));
   expect(calc.currentValue).toBe(4);
});
test('DivideCommand test', ()=> {
   let calc = new Calc();
   calc.currentValue = 2;
   calc.execute(new DivideCommand(1));
   expect(calc.currentValue).toBe(2);
});
test('undo test', ()=>{
    let calc = new Calc();
    calc.execute(new AddCommand(3));
    calc.undo();
    expect(calc.currentValue).toBe(0);
});