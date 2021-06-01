const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['slowmode'],
			description: 'This provides the Channel Slowmode',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message, args) {
        
        var time = message.content.split(' ').slice(1).join(' ')
        if(!time) return message.reply ('Time Not Mentioned!')
        if (message.member.hasPermission('KICK_MEMBERS')) {
        message.channel.setRateLimitPerUser(time)
        message.channel.send('Hey Spamers Slowmode Is On!')
        console.log(`Slowmode is truned on by ${message.author.tag} for ${message.guild.name} ✅ \n`);
        }
        else {
            console.log(`${message.author.tag} dosen't have permission for SlowMode ${message.guild.name} ✅ \n`);
        }
	} 

};
