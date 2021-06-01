const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['retard'],
			description: 'Scribble Ko Bhoot',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`<@771364849736876082> scribble ko bhoot`)
		
	}

};
