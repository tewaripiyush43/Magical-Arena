const getPlayerStats = require("./getPlayerStats.js");
class MagicalArena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentAttacker = player1.health < player2.health ? player1 : player2;
    this.currentDefender = this.currentAttacker === player1 ? player2 : player1;
  }

  playTurn() {
    // console.log("stuck here also");

    const attacker = this.currentAttacker;
    const defender = this.currentDefender;

    const attack = attacker.attackDamage();
    const defence = defender.defendDamage();
    const damageDealt = attack - defence > 0 ? attack - defence : 0;

    defender.takeDamage(damageDealt);

    this.logGameState(false);

    this.currentAttacker = defender;
    this.currentDefender = attacker;
  }

  logGameState(finalResults) {
    const { player1, player2, currentAttacker, currentDefender } = this;
    console.table({
      "Player 1": getPlayerStats(
        player1,
        currentAttacker,
        currentDefender,
        finalResults
      ),
      "Player 2": getPlayerStats(
        player2,
        currentAttacker,
        currentDefender,
        finalResults
      ),
    });
  }

  fight() {
    while (this.player1.isAlive() && this.player2.isAlive()) {
      console.log(
        `${this.currentAttacker.name} attacks ${this.currentDefender.name}`
      );

      this.playTurn();
    }

    console.log("Final Results:");
    this.logGameState(true);

    if (this.player1.isAlive()) {
      console.log(`${this.player1.name} wins!`);
    } else {
      console.log(`${this.player2.name} wins!`);
    }
  }
}

module.exports = MagicalArena;
