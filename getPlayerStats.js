function getPlayerStats(
  player,
  currentAttacker,
  currentDefender,
  finalResults
) {
  if (finalResults) {
    return {
      Name: player.name,
      Health: player.health,
      attack: player.attack,
      strength: player.strength,
      TotalDamage: 0,
      TotalDefence: 0,
    };
  }
  const isAttacker = player === currentAttacker;
  const totalDamage = isAttacker ? player.attack * player.currentDieRoll : 0;
  const totalDefence = isAttacker ? 0 : player.strength * player.currentDieRoll;

  return {
    Name: player.name,
    Health: player.health,
    attack: player.attack,
    strength: player.strength,
    TotalDamage: totalDamage,
    TotalDefence: totalDefence,
  };
}

module.exports = getPlayerStats;
