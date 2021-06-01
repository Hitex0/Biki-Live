const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['who is hacker on scribble'],
			description: 'hacker of scribble',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`<@773396032930840617> Hacker of Scribble`)
		
	}

};
