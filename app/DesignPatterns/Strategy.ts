// ****************** Strategy Pattern ******************
// The Strategy pattern is a behavioral design pattern that enables selecting an algorithm at runtime.
// in another word, it defines a family of algorithms, encapsulates each one, and makes them interchangeable.

interface IPaymentStrategy {
  pay(amount: number): void
}
interface IShopingCart {
  amount: number
  paymentStrategy: IPaymentStrategy
  setPaymentStrategy(paymentStrategy: IPaymentStrategy): void
  addToCart(value: number): void
  checkout(): void
}

class CreditCardPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`)
  }
}

class PaypalPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Paypal`)
  }
}

class ShoppingCart implements IShopingCart {
  amount: number = 0
  paymentStrategy: IPaymentStrategy

  setPaymentStrategy(paymentStrategy: IPaymentStrategy): void {
    this.paymentStrategy = paymentStrategy
  }

  addToCart(value: number): void {
    this.amount += value
  }

  checkout(): void {
    this.paymentStrategy.pay(this.amount)
  }
}

// client code

const cart = new ShoppingCart()
cart.setPaymentStrategy(new CreditCardPayment())
cart.addToCart(100)
cart.checkout()

cart.setPaymentStrategy(new PaypalPayment())
cart.addToCart(200)
cart.checkout()

// ****************** Strategy Pattern ******************

interface ISortStrategy {
  sort(data: number[]): number[]
}
interface ISortData {
  data: number[]
  sortStrategy: ISortStrategy
  setSortStrategy(sortStrategy: ISortStrategy): void
  sort(): void
}

class BubbleSort implements ISortStrategy {
  sort(data: number[]): number[] {
    let n = data.length
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          let temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
    return data
  }
}

class QuickSort implements ISortStrategy {
  private partition(data: number[], low: number, high: number): number {
    let pivot = data[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
      if (data[j] < pivot) {
        i++
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
    let temp = data[i + 1]
    data[i + 1] = data[high]
    data[high] = temp
    return i + 1
  }
  sort(data: number[]): number[] {
    const quickSort = (data: number[], low: number, high: number): void => {
      if (low < high) {
        let pi = this.partition(data, low, high)
        quickSort(data, low, pi - 1)
        quickSort(data, pi + 1, high)
      }
    }
    quickSort(data, 0, data.length - 1)
    return data
  }
}

class MergeSort implements ISortStrategy {
  merge(left: number[], right: number[]): number[] {
    const result: number[] = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
  }
  sort(data: number[]): number[] {
    let n = data.length
    if (n <= 1) return data
    let mid = Math.floor(n / 2)
    let left = data.slice(0, mid)
    let right = data.slice(mid)
    return this.merge(this.sort(left), this.sort(right))
  }
}

class SortData implements ISortData {
  data: number[] = []
  sortStrategy: ISortStrategy

  setSortStrategy(sortStrategy: ISortStrategy): void {
    this.sortStrategy = sortStrategy
  }

  sort(): void {
    this.data = this.sortStrategy.sort(this.data)
  }
}

// client code

const data = new SortData()
data.setSortStrategy(new BubbleSort())
data.data = [5, 3, 8, 1, 2, 7]
data.sort()
console.log(data.data)

data.setSortStrategy(new QuickSort())
data.data = [5, 3, 8, 1, 2, 9]
data.sort()
console.log(data.data)
