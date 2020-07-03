import Vector from './Vector'

export default class Entity extends Vector {
  constructor(selector, options = {}) {
    super(options.vector || {})
    this.hp = options.hp || 0
    this.armor = options.armor || 0
    this.damage = options.damage || 0
    this.speed = options.speed || 0
    this.maxSpeed = options.maxSpeed || 0
  }
}
