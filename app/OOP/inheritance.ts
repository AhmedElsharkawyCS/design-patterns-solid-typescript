// ******** Inheritance ********
// inheritance is a mechanism in which a new class is derived from an existing class.

class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`)
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!")
  }
}

// client code
const dog = new Dog("Tommy")
dog.bark()
dog.move(10)
