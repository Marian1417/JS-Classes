class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log('${this.name} makes a noise');
  }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
   
    }
}
speak() {
    console.log('${this.name} barks!');
}
