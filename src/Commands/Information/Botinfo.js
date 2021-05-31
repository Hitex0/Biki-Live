const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['info', 'bot'],
			description: 'Displays information about the bot.',
			category: '<a:what:848975039859785737>__Information__',
            usage: ';botinfo',
            guildOnly: true
		});
	}

	run(message) {
		const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setThumbnail(this.client.user.displayAvatarURL())
			.setColor('BLUE')
			.addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${this.client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${this.client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Serving ${this.client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '💻 Commands',
                    value: `Currently ${this.client.commands.size} Commands`
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(this.client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: ':calendar:Join Date',
                    value: this.client.user.createdAt,
                    inline: true
                },
            )
			.setTimestamp();

		message.channel.send(embed);
	}

};