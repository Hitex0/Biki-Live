const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['help', 'h'],
			description: 'Displays all the commands in the bot',
			category: '<:amongus:758525421649920031>__General__',
			usage: '[command]'
		});
	}

	async run(message, [command]) {
		const image = "https://media.discordapp.net/attachments/805090988925517837/846789627699396608/biki_bro.png?width=840&height=473"
		const embed = new MessageEmbed()
			.setColor('BLUE')
			.setAuthor(`${message.guild.name} Help Menu`, message.guild.iconURL({ dynamic: true }))
			.setThumbnail(this.client.user.displayAvatarURL())
			.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
			.setImage(image)
			.setTimestamp();

		if (command) {
			const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

			if (!cmd) return message.channel.send(`Invalid Command named. \`${command}\``);

			embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Command Help`, this.client.user.displayAvatarURL());
			embed.setDescription([
				`**❯ Aliases:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`,
				`**❯ Description:** ${cmd.description}`,
				`**❯ Category:** ${cmd.category}`,
				`**❯ Usage:** ${cmd.usage}`
			]);

			return message.channel.send(embed);
		} else {
			embed.setDescription([
				`These are the commands of Biki Live bot. The bot's prefix is: \`${this.client.prefix}\` `,
				`Subscribe to Biki Live [click here](https://www.youtube.com/channel/UCj4UnidqX7S8aWUcTUV0mKA)`,
			]);
			let categories;
			if (!this.client.owners.includes(message.author.id)) {
				categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
			} else {
				categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
			}

			for (const category of categories) {
				embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd =>
					cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' | '));
			}
			return message.channel.send(embed);
		}
	}

};
