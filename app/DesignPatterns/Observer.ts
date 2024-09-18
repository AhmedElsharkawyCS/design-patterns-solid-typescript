// * **************** Observer Pattern ****************
// * The Observer pattern is a behavioral design pattern that allows an object
//   (the subject) to notify other objects (the observers) when the subject's
//   state changes.

interface IObserver {
  update(temperature: number, humidity: number, pressure: number): void
}

interface ISubject {
  registerObserver(observer: IObserver): void
  removeObserver(observer: IObserver): void
  notifyObservers(): void
}

class WeatherData implements ISubject {
  private observers: IObserver[] = []
  private temperature: number = 0
  private humidity: number = 0
  private pressure: number = 0

  registerObserver(observer: IObserver): void {
    const isObserverExist = this.observers.some((obs) => obs === observer)
    if (isObserverExist) {
      return
    }
    this.observers.push(observer)
  }

  removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure)
    })
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.notifyObservers()
  }
}

class CurrentConditionsDisplay implements IObserver {
  private temperature: number = 0
  private humidity: number = 0
  private pressure: number = 0

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.display()
  }

  display(): void {
    console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity and ${this.pressure} pressure`)
  }
}

// client code

const weatherData = new WeatherData()

const currentConditionsDisplay = new CurrentConditionsDisplay()

weatherData.registerObserver(currentConditionsDisplay)

weatherData.setMeasurements(80, 65, 30.4) // Current conditions: 80F degrees and 65% humidity and 30.4 pressure
weatherData.setMeasurements(82, 70, 29.2) // Current conditions: 82F degrees and 70% humidity and 29.2 pressure

weatherData.removeObserver(currentConditionsDisplay)
