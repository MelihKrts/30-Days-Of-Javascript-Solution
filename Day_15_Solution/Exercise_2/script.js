// Day 15 Solution

// Day 15 Exercise Level 2 Solution

// Exercise 2.1

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    displayInfo() {
        return ` ${this.name},  ${this.age},  ${this.color}, ${this.legs}`;
    }
}

const animal1 = new Animal("Lucky", 2, "Brown", 4);
console.log(animal1.displayInfo());

class Dog extends Animal {
    constructor(name, age, color, legs, gender, breeds) {
        super(name, age, color, legs)
        this.gender = gender;
        this.breeds = breeds;
    }

    get getGender() {
        return `${this.gender}`;
    }

    get getBreed() {
        return `${this.breeds}`;
    }

    displayInfo() {
        return  `Animal Info:\nName: ${this.name} Age: ${this.age} , Color: ${this.color}, Legs: ${this.legs}, Gender: ${this.gender}, Breeds: ${this.breeds}`;
    }
}

const dog = new Dog("Lucky", 2, "Brown", 4, "Female", "Beagle");
console.log(dog.displayInfo());