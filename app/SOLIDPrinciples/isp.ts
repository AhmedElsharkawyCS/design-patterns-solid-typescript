// ********** Interface Segregation Principle **********
// a client should not be forced to implement an interface that it does not use
// in other words, a class should not be forced to implement an interface that it does not use

interface Printer {
  print: () => void
}
interface Scanner {
  scan: () => void
}

class MultiFunctionPrinter implements Printer, Scanner {
  print() {
    console.log("Print")
  }
  scan() {
    console.log("Scan")
  }
}

class OnlyPrinter implements Printer {
  print() {
    console.log("Print only")
  }
}

// client code

const multiFunctionPrinter = new MultiFunctionPrinter()
const onlyPrinter = new OnlyPrinter()
multiFunctionPrinter.print() // Print
multiFunctionPrinter.scan() // Scan
onlyPrinter.print() // Print only
