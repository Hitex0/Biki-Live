const BikiClient = require('../../Structures/BikiClient');
const config = require('../../../config.json');
const client = new BikiClient(config);
const fetch = require('node-fetch');

const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['chess'],
			description: 'chess game',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
		let channel = message.member.voice.channel;
        if(!channel) return message.channel.send("You have to be in vc \`voice channel\`")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${token}`,
                "Content-Type": "application/json"
            }
        })
    
        .then(res => res.json())
        .then(invite => {
            if(!invite.code) return message.channel.send("Sadly I can't start chess")
            message.channel.send(`https://discord.com/invite/${invite.code}`)
        })
	}

};
