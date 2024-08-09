// ******* Polymorphism *******
// Polymorphism is a concept by which we can perform a single action in different ways.
// In other words, polymorphism allows us to define one interface and have multiple implementations.

interface ICar {
  start(): void
  stop(): void
}

class TCar implements ICar {
  start() {
    console.log("Toyota is starting")
  }
  stop() {
    console.log("Toyota is stopping")
  }
}

class UCar implements ICar {
  start() {
    console.log("Uber is starting")
  }
  stop() {
    console.log("Uber is stopping")
  }
}

// client code

const tCar = new TCar()
const uCar = new UCar()

tCar.start() // Toyota is starting
uCar.start() // Uber is starting
