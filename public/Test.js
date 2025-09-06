const person = {
  name: "John",
  age: 25,
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // Hi, I'm John
