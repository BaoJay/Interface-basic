// Define a interface
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void
}

let u1: Person;

u1 = {
  name: 'Bao',
  age: 26,
  greet(phrase: string) {
    console.log(phrase + " " + this.name)
  }
}

u1.greet('Hi there, I am');