const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['send'],
			description: 'This provides send msg on privite',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        const mention = message.mentions.users.first();
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) { return; }
        message.delete();
        const sendingMessage = message.content.slice (28);
        const SendingEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`You Have a New Message From **${message.guild.name} Server**!`)
        .setURL('')
        .setAuthor(``, '', '')
        .setDescription(`${sendingMessage}`)
        .setThumbnail('https://img.pngio.com/comments-inbox-message-one-message-icon-png-message-512_512.png')
        .setImage('')
        .setTimestamp()
        .setFooter('Generated From vitex Bot!', 'https://cdn.discordapp.com/attachments/844295450361724929/847765572812275722/Vitex.png');
        mention.send (SendingEmbed);
        message.channel.send ("Done✅");
        console.log(`Message : ${sendingMessage} Genereted by ${message.author.tag} to ${mention} from ${message.guild.name} ✅ \n`);

	
	}

};
