class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice


class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.makeSound(); // Rex makes a sound.
dog.bark();      // Rex barks.
