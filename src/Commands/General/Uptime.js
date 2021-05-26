const Command = require('../../Structures/Command');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ut'],
			description: 'This provides the current uptime of the bot.',
			category: '<:amongus:758525421649920031>__General__'
		});
	}

	async run(message) {
		message.channel.send(`My uptime is \`${ms(this.client.uptime, { long: true })}\``);
	}

};
