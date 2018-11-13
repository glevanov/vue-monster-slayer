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
    },
    giveUp() {
      this.isRunning = false;
    }
  }
});
