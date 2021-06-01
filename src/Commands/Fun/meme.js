const Command = require('../../Structures/Command');
const superagent = require('superagent')

const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['meme'],
			description: 'This provides Meme',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {

        let msg = await message.channel.send("Generating...")

        let {body} = await superagent
        .get(`https://meme-api.herokuapp.com/gimme`)
        //console.log(body.file)
        if(!{body}) return message.channel.send("I broke! Try again.")
    
            let mEmbed = new MessageEmbed()
            .setColor('#42b9f5')
            .setAuthor(body.title, message.guild.iconURL)
            .setImage(body.url)
            .setTimestamp()
            .setFooter(`Generated By Vitex Server`, 'https://cdn.discordapp.com/icons/728622524702916678/caa55d2e799726fbb9025843e6445f9a.png')
    
            message.channel.send({embed: mEmbed});
            console.log(`Meme Generated by ${message.author.tag} for ${message.guild.name} ✅ \n`);
    
            msg.delete();
		
	}

};
