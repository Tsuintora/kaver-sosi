import AnimationStub from './AnimationStub'

export default class AnimationState {
  constructor() {
    this.activeStub = null
    this.animationStubs = {
      run: null,
      idle: null,
      attack: null,
      defence: null
    }
  }

  addAnimation(options = {}) {
    this.animationStubs[options.type] = new AnimationStub(...options)
  }
}
