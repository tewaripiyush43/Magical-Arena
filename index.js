const Player = require("./player");
const MagicalArena = require("./MagicalArena");

const player1 = new Player("Player1", 10, 2, 5);
const player2 = new Player("Player2", 10, 3, 5);

const arena = new MagicalArena(player1, player2);
arena.fight();
