const { MessageEmbed } = require('discord.js');
const SnakeGame = require('snakecord')

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "BLUE",
    timestamp: true,
    gameOverTitle: ":DG_amongus:Game Over"
});
const uchannel = "848514124727058485"
const aschannel = this.client.channels.cache.get(uchannel);
aschannel.send(`Used Snake Game`)
return snakeGame.newGame(message)