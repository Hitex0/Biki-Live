const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['flip'],
			description: 'Flip coin',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message, args) {
		
		const msg = await message.reply('Flipping Coin....');

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const choices = ['Heads' ,'Tails' , 'Sorry the Coin Got Disappeared'];
        const response = choices[Math.floor(Math.random() * choices.length)];

        msg.edit(`${message.author} got **${response}** while flipping the Coin!`);

        console.log(`Coin Flipped by ${message.author.tag} from ${message.guild.name} was Sucessfull! ✅ \n`);
	}

};
