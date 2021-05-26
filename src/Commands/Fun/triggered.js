const { MessageEmbed, MessageAttachment } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['triggered', 'trigger', 'tr'],
			description: 'Trigger yourself',
			category: '<:Eee:784709222399082496>__Image__'
		});
	}
  
  async run(message, args) {
    let member = message.mentions.users.first() || message.author
    let link = `https://some-random-api.ml/canvas/triggered?avatar=${member.avatarURL({ format: 'png'})}`

// -------- Sending the image as an image attachment --------
//create a message attachment with the name of the file with discord.js built in attachment class.
    let attachment = new MessageAttachment(link, 'triggered.gif');
    message.channel.send(attachment);
  }
};