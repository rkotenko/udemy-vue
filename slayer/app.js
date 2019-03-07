// You may of course also outsource this script code into a separate file (e.g. app.js) and simply import this file here
var vm = new Vue({
  el: '#app',
  data: {
    gameStarted: false,
    health: 100,
    monsterHealth: 100,
    turns: []
  },
  computed: {
    healthStyle() {
      return {
        width: this.health + '%'
      };
    },
    monsterHealthStyle() {
      return {
        width: this.monsterHealth + '%'
      };
    }
  },
  methods: {
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}`
      });

      if(!this.checkWin()) {
        this.monsterAttack();      
      }
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin() {
      let gameDone = false;

      if(this.monsterHealth <= 0) {
        gameDone = this.completeGame('You won.');
      } else if(this.health <= 0) {
        gameDone = this.completeGame('You lost.');
      }

      return gameDone;
    },
    completeGame(msg) {
      if(confirm(`${msg} New Game?`)) {
        this.startGame();
      } else {
        this.gameStarted = false;
      }

      return true;
    },
    giveUp() {
      this.gameStarted = false;
      this.turns = [];
    },
    heal() {
      let health = this.health + 10;
      this.health = health > 100 ? 100 : health;
      this.turns.unshift({
        isPlayer: true,
        text: `Player heals for 10`
      });
      this.monsterAttack();
    },
    monsterAttack() {
      let damage = this.calculateDamage(5, 12);
      this.health -= damage;

      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}`
      });
      
      this.checkWin();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster HARD for ${damage}`
      });

      if(!this.checkWin()) {
        this.monsterAttack();      
      }
    },
    startGame() {
      this.gameStarted = true;
      this.health = this.monsterHealth = 100;
      this.turns = [];
    }
  }
});

function computeAttack(cap, min) {
  let r = Math.random();
  let attack = Math.floor(cap - (r * cap));

  return attack > min ? attack : min;
}