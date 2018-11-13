import "../sass/main.scss";
import Vue from "./vue.js";

new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isRunning: false
  },
  methods: {
    startGame() {
      this.isRunning = true;
    }
  }
});
