new Vue({
  el: '#app',
  data: {
    player: {
      health: 100,
      attack: {
        min: 1,
        max: 10
      },
      special: {
        min: 8,
        max: 20
      }
    },
    monster: {
      health: 100,
      attack: {
        min: 2,
        max: 13
      }
    },
    health: {
      player: 100,
      monster: 100
    },
    gameIsRunning: false
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.player.health = 100;
      this.monster.health = 100;
    },
    attack: function () {
      this.monster.health -= this.calculateDamage(
        this.player.attack.min,
        this.player.attack.max
      );
      if (this.checkVictory()) {
        return;
      }

      this.player.health -= this.calculateDamage(
        this.monster.attack.min,
        this.monster.attack.max
      );
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
      if (this.monster.health <= 0) {
        if (confirm('Victory! Do you want to start a New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.player.health <= 0) {
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
