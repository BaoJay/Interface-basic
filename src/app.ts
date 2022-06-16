// Define a interface
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 26;
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name)
    } else {
      console.log('Hi')
    }
  }
}

// let user1: Greetable;
let user1: Person; //the same


user1 = new Person('Thi')

console.log(user1);
user1.greet('Hi there, I am');

user1.name = 'Tran';