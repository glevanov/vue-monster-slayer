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
      var maxDamage = 15;
      var minDamage = 1;
      var damage = Math.floor(Math.random() + maxDamage - minDamage) + minDamage;
      this.health.monster -= damage;

      if (this.health.monster <= 0) {
        alert('Victory!');
        this.gameIsRunning = false;
        return;
      }

      maxDamage = 17;
      minDamage = 3;
      damage = Math.floor(Math.random() + maxDamage - minDamage) + minDamage;
      this.health.player -= damage;

      if (this.health.player <= 0) {
        alert('Defeat!');
        this.gameIsRunning = false;
      }
    },
    specialAttack: function () {
      
    },
    heal: function () {
      
    },
    giveUp: function () {
      
    }
  }
})
