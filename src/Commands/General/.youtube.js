const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['youtube'],
			description: 'youtube link',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        message.channel.send(`https://www.youtube.com/channel/UCH8eeKwreegT1P3hQMRx-pw`)
		
	}

};
