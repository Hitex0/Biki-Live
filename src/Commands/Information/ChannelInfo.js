const Command = require("../../Structures/Command");
const { MessageEmbed } = require("discord.js")
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['channelinfo', 'channel', 'ci'],
			description: 'Displays information about the bot.',
			category: '<a:what:761168875643076608>__Information__'
		});
	}

  // eslint-disable-next-line no-unused-vars
  async run(message, args) {
    let channel =
      message.guild.channels.cache.get(args[0]) ||
      message.guild.channels.cache.find(
        (r) => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.channel;

    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
    }
    const e = new MessageEmbed()
      .setTitle(`Channel Info For ${channel.name}`)
      .addField(`Channel Name:`, [`${channel.name}`])
      .addField(`channel created:`, [
        `${channel.createdAt.toUTCString().substr(0, 16)} (${checkDays(
          channel.createdAt
        )})`,
      ])
      .addField(`channel ID`, [`${channel.id}`])
      .addField(`channel type:`, [`${channel.type}`])
      .addField(`channel topic:`, [`${channel.topic || "No topic set"}`])
      .setColor("RANDOM")
      .setFooter(`use a channel id to see info for that channel`);
    message.channel.send(e);
  }
};