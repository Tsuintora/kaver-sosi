export default class AnimationStub {
  constructor(options = {}) {
    this.path = options.path || null
    this.framesCount = options.framesCount || null
    this.frameWidth = null
    this.frames = []
    this.fillFrames()
  }
  fillFrames() {
    if (!this.path || !this.framesCount) return false
    for (let i = 0; i < this.framesCount; i++) {
      this.frames.push(`${this.path}/${i}.png`)
    }
  }
}
