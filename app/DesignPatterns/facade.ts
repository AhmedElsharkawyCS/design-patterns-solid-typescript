// ******************* Facade Pattern *******************
// The Facade pattern is a structural pattern that provides a simplified interface to a complex system of classes.

interface Amplifier {
  turnOn(): void
  setVolume(volume: number): void
}

interface DvdPlayer {
  turnOn(): void
  play(movie: string): void
}

interface Projector {
  turnOn(): void
  setInput(input: string): void
}

class AmplifierImpl implements Amplifier {
  turnOn() {
    console.log("Amplifier is on")
  }
  setVolume(volume: number) {
    console.log(`Volume set to ${volume}`)
  }
}

class DvdPlayerImpl implements DvdPlayer {
  turnOn() {
    console.log("DVD player is on")
  }
  play(movie: string) {
    console.log(`Playing ${movie}`)
  }
}

class ProjectorImpl implements Projector {
  turnOn() {
    console.log("Projector is on")
  }
  setInput(input: string) {
    console.log(`Input set to ${input}`)
  }
}

class HomeTheaterFacade {
  constructor(private amplifier: Amplifier, private dvdPlayer: DvdPlayer, private projector: Projector) {}

  watchMovie(movie: string) {
    this.amplifier.turnOn()
    this.amplifier.setVolume(10)
    this.dvdPlayer.turnOn()
    this.dvdPlayer.play(movie)
    this.projector.turnOn()
    this.projector.setInput("DVD")
  }
}

// client code

const amplifier = new AmplifierImpl()
const dvdPlayer = new DvdPlayerImpl()
const projector = new ProjectorImpl()

const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector)
homeTheater.watchMovie("Inception") // Amplifier is on, Volume set to 10, DVD player is on, Playing Inception, Projector is on, Input set to DVD
