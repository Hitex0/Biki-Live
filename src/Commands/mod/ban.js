const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ban'],
			description: 'This provides bann members',
			category: '<:DiscordPatnership:731046708707852328>__Moderation__',
            userPerms: ['BAN_MEMBERS'],
            botPerms: ['ADMINISTRATOR'],
            guildOnly: true
		});
	}

	async run(message, args) {
      
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry a\'bout that😉');
        if(!member.kickable) return message.channel.send('You can\'t kick this user😁');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t kick yourself😅');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        await member.ban();
        console.log('Ban');
        message.channel.send(`${member} has been Kicked from the server`) 
        member.send(`You have been kicked😡 from ${message.guild.name}Reason: ${reason}`)
	}

};