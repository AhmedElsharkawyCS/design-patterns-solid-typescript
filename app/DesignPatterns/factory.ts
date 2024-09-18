// **************** Factory Pattern ****************
// The Factory pattern is a creational pattern that provides an interface for
// creating objects in a superclass, but allows subclasses to alter the type of
// objects that will be created.

interface CarAttrs {
  make: string
  model: string
  year: number
}

abstract class CarDriver {
  constructor(public carAttrs: CarAttrs) {}
  abstract drive(): void
}

class FordDriver extends CarDriver {
  drive() {
    console.log(`Driving a ${this.carAttrs.make} ${this.carAttrs.model}`)
  }
}

class ToyotaDriver extends CarDriver {
  drive() {
    console.log(`Driving a ${this.carAttrs.make} ${this.carAttrs.model}`)
  }
}

class CarDriverFactory {
  static createDriver(carAttrs: CarAttrs) {
    if (carAttrs.make === "Ford") {
      return new FordDriver(carAttrs)
    }
    if (carAttrs.make === "Toyota") {
      return new ToyotaDriver(carAttrs)
    }
    throw new Error("Invalid car make")
  }
}

// client code

const fordDriver = CarDriverFactory.createDriver({
  make: "Ford",
  model: "F150",
  year: 2020
})
fordDriver.drive() // Driving a Ford F150
const toyotaDriver = CarDriverFactory.createDriver({
  make: "Toyota",
  model: "Corolla",
  year: 2020
})
toyotaDriver.drive() // Driving a Toyota
