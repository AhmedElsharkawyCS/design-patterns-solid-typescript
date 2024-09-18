// *********** Builder Design Pattern ***********
// Builder pattern is a creational design pattern that lets you construct complex objects step by step.

interface ICar1 {
  name: string
  color: string
  price: number
  model: string
}

class Car implements ICar1 {
  constructor(public name: string, public color: string, public price: number, public model: string) {}
}

interface ICarBuilder {
  setName(name: string): ICarBuilder
  setColor(color: string): ICarBuilder
  setPrice(price: number): ICarBuilder
  setModel(model: string): ICarBuilder
  build(): Car
}

class CarBuilder implements ICarBuilder {
  private car: Car

  constructor() {
    this.car = new Car("", "", 0, "")
  }

  setName(name: string): ICarBuilder {
    this.car.name = name
    return this
  }

  setColor(color: string): ICarBuilder {
    this.car.color = color
    return this
  }

  setPrice(price: number): ICarBuilder {
    this.car.price = price
    return this
  }

  setModel(model: string): ICarBuilder {
    this.car.model = model
    return this
  }

  build(): Car {
    return new Car(this.car.name, this.car.color, this.car.price, this.car.model)
  }
}

class CarDirector {
  private carBuilder: ICarBuilder

  constructor(carBuilder: ICarBuilder) {
    this.carBuilder = carBuilder
  }

  constructSportCar() {
    return this.carBuilder.setName("Sport Car").setColor("Red").setPrice(100000).setModel("2021").build()
  }

  constructFamilyCar() {
    return this.carBuilder.setName("Family Car").setColor("Blue").setPrice(50000).setModel("2021").build()
  }
}

// client code

const carBuilder = new CarBuilder()
const carDirector = new CarDirector(carBuilder)

const sportCar = carDirector.constructSportCar()
const familyCar = carDirector.constructFamilyCar()

console.log(sportCar)
console.log(familyCar)
