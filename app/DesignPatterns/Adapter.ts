// **************** Adapter Pattern ****************
// The Adapter pattern is a structural pattern that allows objects with incompatible interfaces to collaborate.
// in another words, the adapter pattern allows objects with incompatible interfaces to work together.

interface IMySQLDatabase {
  connectToMySQL(): void
  queryMySQL(query: string): void
}
interface IMongoDBDatabase {
  connectToMongo(): void
  queryMongo(query: string): void
}

class MySQLDatabaseImpl implements IMySQLDatabase {
  connectToMySQL(): void {
    console.log("Connecting to MySQL database")
  }
  queryMySQL(query: string): void {
    console.log("Querying MySQL database with query", query)
  }
}

class MongoDBDatabaseImpl implements IMongoDBDatabase {
  connectToMongo() {
    console.log("Connecting to MongoDB database")
  }
  queryMongo(query: string) {
    console.log("Querying MongoDB database with query", query)
  }
}

class MySQLToMongoAdapter implements IMySQLDatabase {
  constructor(private mongoDB: IMongoDBDatabase) {}

  connectToMySQL(): void {
    this.mongoDB.connectToMongo()
  }
  queryMySQL(query: string): void {
    this.mongoDB.queryMongo(query)
  }
}

// client code

const mongoDB = new MongoDBDatabaseImpl()

const mySQLAdapter = new MySQLToMongoAdapter(mongoDB)
mySQLAdapter.connectToMySQL() // Connecting to MongoDB database
mySQLAdapter.queryMySQL("SELECT * FROM users") // Querying MongoDB database with query SELECT * FROM users
