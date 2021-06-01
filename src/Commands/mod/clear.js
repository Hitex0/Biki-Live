const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['clear'],
			description: 'clear msg',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message, args) {
		client.on('message', message => {
            if (message.content.startsWith("||say ")) {
               message.delete(1000); //Supposed to delete message
               message.channel.send(message.content.slice(5, message.content.length));
            }
         });
	}

};
