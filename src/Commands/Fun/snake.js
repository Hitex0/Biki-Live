const { MessageEmbed } = require('discord.js');
const SnakeGame = require('snakecord')
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['snake'],
			description: 'snake game',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
		const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "BLUE",
            timestamp: true,
            gameOverTitle: "Game Over"
        });
        
        return snakeGame.newGame(message)
        
	}

};
