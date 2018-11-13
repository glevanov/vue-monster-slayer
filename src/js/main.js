import "../sass/main.scss";
import Vue from "./vue.js";

new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isRunning: false,
    isFinished: false,
    endGameMessage: "",
    log: []
  },
  methods: {
    startGame() {
      this.isRunning = true;
      this.isFinished = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    },
    giveUp() {
      this.isRunning = false;
      this.isFinished = false;
    },
    attack() {
      let damage = this._calculateDamage(3, 10);
      if (damage > this.monsterHealth) {
        damage = this.monsterHealth;
      }
      this.monsterHealth -= damage;
      this.log.unshift({
        isPlayer: true,
        text: "Player slashes Monster for " + damage
      });
      if (this._checkWin()) {
        return;
      }
      this._monsterAttack();
    },
    special() {
      let damage = this._calculateDamage(10, 20);
      if (damage > this.monsterHealth) {
        damage = this.monsterHealth;
      }
      this.monsterHealth -= damage;
      this.log.unshift({
        isPlayer: true,
        text: "Player blasts Monster for " + damage
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
        text: "Player heals for 10"
      });
      this._monsterAttack();
    },
    _monsterAttack() {
      let damage = this._calculateDamage(3, 12);
      if (damage > this.playerHealth) {
        damage = this.playerHealth;
      }
      this.playerHealth -= damage;
      this._checkWin();
      this.log.unshift({
        isPlayer: false,
        text: "Monster claws Player for " + damage
      });
    },
    _checkWin() {
      if (this.monsterHealth <= 0) {
        this.endGameMessage = "Victory! Start new game?";
        this.isFinished = true;
        return true;
      } else if (this.playerHealth <= 0) {
        this.endGameMessage = "Defeat! Start new game?";
        this.isFinished = true;
        return true;
      }
      return false;
    },
    _calculateDamage(min, max) {
      return Math.floor(Math.random() * max - min) + min;
    }
  }
});
