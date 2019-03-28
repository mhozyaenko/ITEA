export class Calc {
    constructor() {
        this.currentValue = 0;
        this.history = [];
    }
    execute(command) {
        this.currentValue = command.execute(this.currentValue);
        this.history.push(command);
    }
    undo() {
        const cmd = this.history.pop();
        this.currentValue = cmd.undo(this.currentValue);
    }
}
export function Command(fn, undo, value) {
    this.execute = fn;
    this.undo = undo;
    this.value = value;
}
function add(value) {
    return value + this.value;
}
function sub(value) {
    return value - this.value;
}
function multiply(value) {
    return value * this.value;
}
function divide(value) {
    return value / this.value;
}
export function AddCommand(value) {
    Command.call(this, add, sub, value);
}
export function SubCommand(value) {
    Command.call(this, sub, add, value);
}
export function MultiplyCommand(value) {
    Command.call(this, multiply, divide, value);
}
export function DivideCommand(value) {
    Command.call(this, divide, multiply, value);
}
