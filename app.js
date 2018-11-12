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
      },
      heal: 15
    },
    monster: {
      health: 100,
      attack: {
        min: 2,
        max: 13
      }
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
      this._attackPhase(
        this.player.attack.min,
        this.player.attack.max
      );
    },
    specialAttack: function () {
      this._attackPhase(
        this.player.special.min,
        this.player.special.max
      );
    },
    heal: function () {
      if (this.player.health <= 100 - this.player.heal) {
        this.player.health += this.player.heal;
      } else {
        this.player.health = 100;
      }
      this._monsterAttack();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    _calculateDamage: function (minDamage, maxDamage) {
      return Math.floor(Math.random() + maxDamage - minDamage) + minDamage;
    },
    _checkVictory: function () {
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
    },
    _monsterAttack: function () {
      this.player.health -= this._calculateDamage(
        this.monster.attack.min,
        this.monster.attack.max
      );
      this._checkVictory();
    },
    _attackPhase: function (playerMin, playerMax) {
      this.monster.health -= this._calculateDamage(playerMin, playerMax);
      if (this._checkVictory()) {
        return;
      }
      this._monsterAttack();
    }
  }
})
