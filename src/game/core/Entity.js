import Vector from './Vector'
import AnimationState from './AnimationState'

export default class Entity extends Vector {
  constructor(options = {}) {
    super(options.vector || {})
    this.hp = options.hp || 0
    this.armor = options.armor || 0
    this.damage = options.damage || 0
    this.speed = options.speed || 0
    this.maxSpeed = options.maxSpeed || 0
    this.animationState = new AnimationState()
  }
}
