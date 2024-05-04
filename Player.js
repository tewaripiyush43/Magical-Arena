class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
    this.currentDieRoll = 0;
  }

  rollDie() {
    this.currentDieRoll = Math.floor(Math.random() * 6) + 1;
    return this.currentDieRoll;
  }

  attackDamage() {
    return this.attack * this.rollDie();
  }

  defendDamage() {
    return this.strength * this.rollDie();
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }

  isAlive() {
    return this.health > 0;
  }
}

module.exports = Player;
