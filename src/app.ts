// Define a interface
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 26;
  constructor(public name: string) {

  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name)
  }
}

// let user1: Greetable;
let user1: Person; //the same


user1 = new Person('Bao')

console.log(user1);
user1.greet('Hi there, I am');

user1.name = 'Tran';