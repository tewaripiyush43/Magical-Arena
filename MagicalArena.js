class MagicalArena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentAttacker = player1.health < player2.health ? player1 : player2;
    this.currentDefender = currentAttacker === player1 ? player2 : player1;
  }

  playTurn() {
    const attacker = this.currentAttacker;
    const defender = this.currentDefender;

    const attack = attacker.attackDamage();
    const defence = defender.defendDamage();
    const damageDealt = attack - defence > 0 ? attack - defence : 0;

    defender.takeDamage(damageDealt);

    currentAttacker = defender;
    this.currentDefender = attacker;
  }

  fight() {
    while (this.player1.isAlive && this.player2.isAlive) {
      this.playTurn();
    }

    if (this.player1.isAlive) {
      console.log(`${this.player1.name} wins!`);
    } else {
      console.log(`${this.player2.name} wins!`);
    }
  }
}
