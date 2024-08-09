// ********* Liskov Substitution Principle *********
// objects of a superclass shall be replaceable with objects of its subclasses without affecting the functionality of the program
// in other words, a subclass should override the parent class methods in a way that does not break functionality

abstract class Shape {
  abstract area(): number
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super()
  }

  area(): number {
    return this.width * this.height
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super()
  }

  area(): number {
    return this.side * this.side
  }
}

// client code

function calcArea(shape: Shape) {
  return shape.area()
}

const rectangle = new Rectangle(10, 20)
const square = new Square(10)

console.log(calcArea(rectangle)) // 200
console.log(calcArea(square)) // 100

// a real world example of Liskov Substitution Principle is the following:

abstract class PaymentProcessor {
  abstract processPayment(amount: number): void
}

class CreditCardPaymentProcessor extends PaymentProcessor {
  constructor(private cardNumber: string) {
    super()
  }

  processPayment(amount: number): void {
    console.log(`Processing credit: ${this.cardNumber} payment of ${amount}`)
  }
}

class PayPalPaymentProcessor extends PaymentProcessor {
  constructor(private email: string) {
    super()
  }

  processPayment(amount: number): void {
    console.log(`Processing PayPal: ${this.email} payment of ${amount}`)
  }
}

// client code

function processPayment(paymentProcessor: PaymentProcessor, amount: number) {
  paymentProcessor.processPayment(amount)
}

const creditCardPaymentProcessor = new CreditCardPaymentProcessor("1234 5678 9012 3456")
const payPalPaymentProcessor = new PayPalPaymentProcessor("test@gmail.com")

processPayment(creditCardPaymentProcessor, 100)
processPayment(payPalPaymentProcessor, 100)
