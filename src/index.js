import Entity from '@/game/core/Entity'

const player = new Entity('#player', {
  hp: 100,
  vector: {
    posX: 50
  }
})
console.log(player)
