import Entity from '@core/Entity'

const player = new Entity({
  hp: 100,
  vector: {
    selector: '#player',
    posX: 50
  }
})
console.log(player)
