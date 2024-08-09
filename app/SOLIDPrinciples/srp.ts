// ********** Single Responsibility Principle **********
// a class should do one thing and one thing only

class User {
  constructor(private name: string, private email: string) {}

  get getName() {
    return this.name
  }
  get getEmail() {
    return this.email
  }
}

class UserAuth {
  constructor(private user: User) {}

  authenticate() {
    console.log(`Authenticating ${this.user.getName}`)
  }
}

// client code
const user = new User("John", "johan@gmail.com")
const userAuth = new UserAuth(user)
userAuth.authenticate()
