import "../sass/main.scss";
import Vue from "./vue.js";

new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isRunning: false,
    log: []
  },
  methods: {
    startGame() {
      this.isRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    },
    giveUp() {
      this.isRunning = false;
    },
    attack() {
      let damage = this._calculateDamage(1, 10);
      this.monsterHealth -= damage;
      this.log.unshift({
        isPlayer: true,
        text: 'Player slashes Monster for ' + damage
      });
      if (this._checkWin()) {
        return;
      }
      this._monsterAttack();
    },
    special() {
      let damage = this._calculateDamage(8, 15);
      this.monsterHealth -= damage;
      this.log.unshift({
        isPlayer: true,
        text: 'Player blasts Monster with fireball for ' + damage
      });
      if (this._checkWin()) {
        return;
      }
      this._monsterAttack();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.log.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this._monsterAttack();
    },
    _monsterAttack() {
      let damage = this._calculateDamage(3, 12);
      this.playerHealth -= damage;
      this._checkWin();
      this.log.unshift({
        isPlayer: false,
        text: 'Monster claws Player for ' + damage
      });
    },
    _checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.isRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.isRunning = false;
        }
        return true;
      }
      return false;
    },
    _calculateDamage(min, max) {
      return Math.floor(Math.random() * max - min) + min;
    }
  }
});
