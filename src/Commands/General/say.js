const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['say'],
			description: 'send bot msg',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message, args) {
		if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You dont have permission for this command.');
        if (!args[0]) return message.reply("Please specify message that bot should say.")
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
            }
	}

};
