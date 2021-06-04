const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['discord'],
			description: 'invite discord server link',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`https://discord.gg/sAH8UzJmZT`)
		
	}

};
