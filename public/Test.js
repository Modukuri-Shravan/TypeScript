const person = {
  name: "John",
  age: 25,
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // Hi, I'm John


class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound
