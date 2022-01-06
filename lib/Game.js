const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'dagger'));
    this.enemies.push(new Enemy('orc', 'axe'));
    this.enemies.push(new Enemy('skeleton', 'sword'));

    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        // destructure name from prompt object
        .then(({ name }) => {
            this.player = new Player(name);

            // test the object creation (use the arrow shorthand for all inquirer callbacks in this project!)
            console.log(this.startNewBattle());
        })
};

module.exports = Game;