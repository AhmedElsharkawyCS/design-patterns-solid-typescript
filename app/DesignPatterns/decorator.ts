// *************** Decorator Pattern ***************
// The Decorator pattern is a structural pattern that allows behavior to be
// added to individual objects, either statically or dynamically, without
// affecting the behavior of other objects from the same class.

// in another words, the decorator pattern is used to add new functionality to an existing object without altering its structure.

interface Coffee {
  cost(): number
  description(): string
}

class SimpleCoffee implements Coffee {
  cost() {
    return 1
  }
  description() {
    return "Simple coffee"
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected decoratedCoffee: Coffee) {}

  abstract cost(): number
  abstract description(): string
}

class MilkDecorator extends CoffeeDecorator {
  constructor(decoratedCoffee: Coffee) {
    super(decoratedCoffee)
  }
  cost() {
    return this.decoratedCoffee.cost() + 0.5
  }
  description() {
    return this.decoratedCoffee.description() + ", milk"
  }
}

// client code

const simpleCoffee = new SimpleCoffee()
console.log(simpleCoffee.cost()) // 1
console.log(simpleCoffee.description()) // Simple coffee

const milkCoffee = new MilkDecorator(simpleCoffee)
console.log(milkCoffee.cost()) // 1.5
console.log(milkCoffee.description()) // Simple coffee, milk

// *********************************

interface ServerRequest {
  handleRequest(req: any): void
}

class BaseServer implements ServerRequest {
  handleRequest(req: any): void {
    console.log("BaseServer handling request", req)
  }
}

abstract class ServerDecorator implements ServerRequest {
  constructor(protected decoratedServer: ServerRequest) {}

  abstract handleRequest(req: any): void
}

class AuthServerMiddleware extends ServerDecorator {
  constructor(decoratedServer: ServerRequest) {
    super(decoratedServer)
  }
  handleRequest(req: any) {
    const isLogged = true
    this.decoratedServer.handleRequest({ ...req, isLogged })
  }
}

class DebugServerMiddleware extends ServerDecorator {
  constructor(decoratedServer: ServerRequest) {
    super(decoratedServer)
  }
  handleRequest(req: any) {
    const debug = true
    this.decoratedServer.handleRequest({ ...req, debug })
  }
}

// client code

const baseServer = new BaseServer()
baseServer.handleRequest({}) // BaseServer handling request {}

const authServer = new AuthServerMiddleware(baseServer)
authServer.handleRequest({}) // BaseServer handling request { isLogged: true }

const debugServer = new DebugServerMiddleware(authServer)
debugServer.handleRequest({}) // BaseServer handling request { isLogged: true, debug: true }
