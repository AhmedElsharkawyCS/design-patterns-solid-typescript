// **************** Bridge Pattern *****************
// The Bridge pattern is a structural pattern that decouples an abstraction from its implementation so that the two can vary independently.

interface MediaPayerImpl {
  playVideo(): void
  playAudio(): void
}

class VlcPlayer implements MediaPayerImpl {
  playVideo() {
    console.log("Playing video with VLC")
  }
  playAudio() {
    console.log("Playing audio with VLC")
  }
}

class WindowsMediaPlayer implements MediaPayerImpl {
  playVideo() {
    console.log("Playing video with Windows Media Player")
  }
  playAudio() {
    console.log("Playing audio with Windows Media Player")
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected mediaPayerImpl: MediaPayerImpl) {}

  abstract play(): void
}

class VideoPlayer extends MediaPlayerAbstraction {
  play() {
    this.mediaPayerImpl.playVideo()
  }
}
class AudioPlayer extends MediaPlayerAbstraction {
  play() {
    this.mediaPayerImpl.playAudio()
  }
}

// client code

const vlcPlayerImpl = new VlcPlayer()
const windowsMediaPlayerImpl = new WindowsMediaPlayer()

const videoPlayer = new VideoPlayer(vlcPlayerImpl)
videoPlayer.play() // Playing video with VLC
const audioPlayer = new AudioPlayer(windowsMediaPlayerImpl)
audioPlayer.play() // Playing audio with Windows Media Player
