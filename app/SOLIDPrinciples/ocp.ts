// ************ Open/Closed Principle ************
// a class should be open for extension but closed for modification
// open for extension means that we should be able to add new functionality to an object without modifying its source code
// closed for modification means that we should not modify the source code of an object to add new functionality

interface ICustomer {
  getDiscount(): number
}

class RegularCustomer implements ICustomer {
  getDiscount(): number {
    return 0
  }
  applyLoyaltyPoints(points: number) {
    return points * 0.1
  }
}
class PremiumCustomer implements ICustomer {
  getDiscount(): number {
    return 0.1
  }
  applyLoyaltyPoints(points: number) {
    return points * 0.2
  }
}

class Discount {
  getDiscount(customer: ICustomer, price: number) {
    return price - price * customer.getDiscount()
  }
}

// client code
const discount = new Discount()
const regularCustomer = new RegularCustomer()
const premiumCustomer = new PremiumCustomer()

console.log(discount.getDiscount(regularCustomer, 100)) // 100
console.log(discount.getDiscount(premiumCustomer, 100)) // 90

console.log(regularCustomer.applyLoyaltyPoints(100)) // 10
console.log(premiumCustomer.applyLoyaltyPoints(100)) // 20
