const { MessageEmbed, MessageAttachment } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['wasted', 'waste', 'wd'],
			description: 'Waste yourself',
			category: '<:Eee:848974035522027520>__Image__'
		});
	}
  
  async run(message, args) {
    let member = message.mentions.users.first() || message.author
    let link = `https://some-random-api.ml/canvas/wasted/?avatar=${member.avatarURL({ format: 'png'})}`

// -------- Sending the image as an image attachment --------
//create a message attachment with the name of the file with discord.js built in attachment class.
    let attachment = new MessageAttachment(link, 'wasted.png');
    message.channel.send(attachment);
  }
};