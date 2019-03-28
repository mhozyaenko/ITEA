import { Calc, AddCommand, SubCommand, MultiplyCommand, DivideCommand } from './calc.js';

class Calculator {
   constructor() {
       this.calc = new Calc();
   }
   render() {
       const root = document.getElementById('root');
       const nodeInDom = root.querySelector('.wrap');
       let node;
       if (nodeInDom===null) {
           node = document.createElement('div')
           node.className = 'wrap';
       } else {
           node = nodeInDom;
       }

       node.innerHTML  = `
       <input class="valueInput" type="number"/>
       <h3>${this.calc.currentValue}</h3>
       <div class="controls">
       <button class="addBtn" type="button">+</button>
       <button class="subBtn" type="button">-</button>
       <button class="multiplyBtn" type="button">*</button>
       <button class="divideBtn" type="button">/</button>
       <button class="undoBtn" type="button">undo</button>
</div>
`;
       let history = document.createElement('ul');
       this.calc.history.forEach(item => {
       history.innerHTML += `<li>${item.execute.name} ${item.value}</li>`;
   });
       node.appendChild(history);
       if (nodeInDom===null) root.appendChild(node);
       const valueInput = node.querySelector('.valueInput');
       const addBtn = node.querySelector('.addBtn');
       addBtn.addEventListener('click', (e) => {
           e.preventDefault();
           let value = Number(valueInput.value);
           this.calc.execute(new AddCommand(value));
           this.render();
       });
       const subBtn = node.querySelector('.subBtn');
       subBtn.addEventListener('click', (e) => {
           e.preventDefault();
           let value = Number(valueInput.value);
           this.calc.execute(new SubCommand(value));
           this.render();
       });
       const multiplyBtn = node.querySelector('.multiplyBtn');
       multiplyBtn.addEventListener('click', (e)=> {
           e.preventDefault();
           let value = Number(valueInput.value);
           this.calc.execute(new MultiplyCommand(value));
           this.render();
       });
       const divideBtn = node.querySelector('.divideBtn');
       divideBtn.addEventListener('click', (e)=>{
           e.preventDefault();
           let value = Number(valueInput.value);
           this.calc.execute(new DivideCommand(value));
           this.render();
       });
       const undoBtn = node.querySelector('.undoBtn');
       undoBtn.addEventListener('click', (e)=>{
           e.preventDefault();
           console.log(this);
           this.calc.undo();
           this.render();
       });
   }
}

const myCalc = new Calculator();
myCalc.render();