// ************ Singleton Pattern ************
// Singleton pattern is a creational design pattern that restricts the instantiation of a class to one object.

class Logger {
  private static instance: Logger

  // Private constructor to prevent instantiation
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }

    return Logger.instance
  }

  public log(message: string): void {
    console.log(message)
  }
}

// client code

class Application {
  constructor(private logger: Logger) {}

  run() {
    this.logger.log("Application is running")
  }
}

const logger = Logger.getInstance()
const app = new Application(logger)
app.run()
