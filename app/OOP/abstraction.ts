// ********** ABSTRACTION **********
// Abstraction is a concept of hiding the implementation details and showing only functionality to the user.
// In other words, it shows only important things to the user and hides the internal details.

interface ICar {
  start(): void
  stop(): void
}

class BMW implements ICar {
  start() {
    console.log("BMW is starting")
  }
  stop() {
    console.log("BMW is stopping")
  }
}

class Mercedes implements ICar {
  start() {
    console.log("Mercedes is starting")
  }
  stop() {
    console.log("Mercedes is stopping")
  }
}

function startCar(car: ICar) {
  car.start()
}

function stopCar(car: ICar) {
  car.stop()
}

// client code

const bmw = new BMW()
const mercedes = new Mercedes()

startCar(bmw)
startCar(mercedes)
stopCar(bmw)
stopCar(mercedes)
