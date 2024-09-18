// ***************** Prototype Pattern *****************
// Prototype pattern is a creational design pattern that lets you copy existing
// objects without making your code dependent on their classes.
//
// in another words, it allows you to create a copy of an existing object and modify it to your needs.

interface UserInfo {
  name: string
  age: number
  email: string
}

interface Prototype {
  clone(): Prototype
  getInfo(): UserInfo
}

class UserClass implements Prototype {
  constructor(private info: UserInfo) {}

  clone(): Prototype {
    const clone = Object.create(this)
    clone.info = { ...this.info }
    return clone
  }

  getInfo(): UserInfo {
    return this.info
  }
}

// client code

const user1 = new UserClass({ name: "John", age: 30, email: "user1@gmail.com" })
const user2 = user1.clone()

if (user1 !== user2) {
  console.log("user1 and user2 are different objects")
}
