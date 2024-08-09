// *********** Encapsulation ***********
// Encapsulation is the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components.
// Encapsulation is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.

class BankAccount {
  private balance: number = 0

  constructor(initialBalance: number) {
    this.balance = initialBalance
  }

  deposit(amount: number) {
    this.balance += amount
  }

  withdraw(amount: number) {
    this.balance -= amount
  }

  getBalance() {
    return this.balance
  }
}

// client code
const bankAccount = new BankAccount(100)
bankAccount.deposit(50)
console.log(bankAccount.getBalance()) // 150
bankAccount.withdraw(20)
console.log(bankAccount.getBalance()) // 130
