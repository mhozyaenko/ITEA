class Professor {
  constructor(name) {
    this.name = name;
    this.monitor = null;
  }
  answerTheQuestion(student) {
    if (student.monitor !== 'monitor') {
      console.error('It is not your bussines');
    } else {
      console.log('Yes, my dear?!');
    }
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.monitor = null;
  }

  getAnswer() {
   (this.monitor !== null ) ? console.log(`${this.name} - wait for answer from Professor`)
     : console.error(`${this.name} - you can't ask without Monitor, please add to group first`);
  }

  tipTheMonitor(question, professor) {
    (this.monitor !== null) ? this.monitor.askProfessor(this, professor, question)
      : console.error(`${this.name} - you can't ask without Monitor, please add to group first`);
  }
}

class Monitor extends Student {
  constructor(name) {
    super(name);
    this.monitor = 'monitor';
    this.studentGroup = {};
    this.professors = {};
  }

  addToGroup(student) {
    this.studentGroup[student.name] = student;
    student.monitor = this;
    console.log(`Add new student '${student.name}'  to group`);
    console.log('List or students:', this.studentGroup);
  }

  addProfessor(professor) {
    this.professors[professor.name] = professor;
    professor.monitor = this;
    console.log(`Add new professor '${professor.name}'`);
    console.log('List or professors:', this.professors);
  }

  askProfessor(student, professor, question) {
    console.log(`${student.name} asks ${professor.name}: ${question}`);
    professor.answerTheQuestion(this, question);

  }
}

let student1 = new Student('Alisa');
let student2 = new Student('John');
let student3 = new Student('Jane');
let monitor = new Monitor('Helen')
let professor = new Professor('Einstein');

monitor.addProfessor(professor);
monitor.addToGroup(student1);
monitor.addToGroup(student2);

student1.tipTheMonitor('question', professor);
student1.getAnswer('question', professor);
student3.tipTheMonitor('question', professor);
