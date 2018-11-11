new Vue({
  el: '#app',
  data: {
    health: {
      player: 100,
      monster: 100
    },
    gameIsRunning: false
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.health.player = 100;
      this.health.monster = 100;
    },
    attack: function () {
      
    },
    specialAttack: function () {
      
    },
    heal: function () {
      
    },
    giveUp: function () {
      
    }
  }
})
