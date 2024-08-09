// ******************** Dependency Inversion Principle ********************
// High-level modules should not depend on low-level modules. Both should depend on abstractions.
// Abstractions should not depend on details. Details should depend on abstractions.
// in other words, the high-level module should not depend on the low-level module, but they should depend on abstractions.

interface IDatabase {
  save: (data: string) => void
}

class MySQLDatabase implements IDatabase {
  save(data: string) {
    console.log(`${data} saved in MySQL`)
  }
}

class MongoDatabase implements IDatabase {
  save(data: string) {
    console.log(`${data} saved in MongoDB`)
  }
}

class HighLevelModule {
  constructor(private db: IDatabase) {}

  execute(data: string) {
    this.db.save(data)
  }
}

// client code

const mysql = new MySQLDatabase()
const mongo = new MongoDatabase()

const highLevelModule1 = new HighLevelModule(mysql)
const highLevelModule2 = new HighLevelModule(mongo)

highLevelModule1.execute("data1") // data1 saved in MySQL
highLevelModule2.execute("data2") // data2 saved in MongoDB
