const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['website'],
			description: 'website link',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`http://vitex-community.weebly.com/`)
		
	}

};
