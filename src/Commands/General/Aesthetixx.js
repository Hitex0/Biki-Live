const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['aes'],
			description: 'Ast...',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`<@773396032930840617>  hacker Hacker of Scribble`)
		
	}

};
