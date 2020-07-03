import {$} from './Dom'

export default class Vector {
  constructor(options) {
    this.posX = options.posX || null
    this.posY = options.posY || null
    this._posX = options._posX || null
    this._posY = options._posY || null
    this.$root = $(options.selector) || null
  }

  spawn() {}

  destroy() {}
}
