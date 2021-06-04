const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['f'],
			description: 'Paid Respect So',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`${message.guild.name}Paid Respect😇`)
		
	}

};
