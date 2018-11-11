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
      this.health.monster -= this.calculateDamage(1, 15);
      if (this.checkVictory()) {
        return;
      }

      this.health.player -= this.calculateDamage(3, 17);
      this.checkVictory();
    },
    specialAttack: function () {
      
    },
    heal: function () {
      
    },
    giveUp: function () {
      
    },
    calculateDamage: function (minDamage, maxDamage) {
      return Math.floor(Math.random() + maxDamage - minDamage) + minDamage;
    },
    checkVictory: function () {
      if (this.health.monster <= 0) {
        if (confirm('Victory! Do you want to start a New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.health.player <= 0) {
        if (confirm('Defeat! Do you want to start a New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})
