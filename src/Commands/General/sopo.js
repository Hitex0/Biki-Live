const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['s'],
			description: 'sopo...',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`Cute Voice Singer!`)
		
	}

};
