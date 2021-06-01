const Event = require('../Structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.client.user.tag}`,
			`Loaded ${this.client.commands.size} commands!`,
			`Loaded ${this.client.events.size} events!`
		].join('\n'));

		const activities = [
			`.help`,
			`गतिविधि🥴`,
			`Hey No Spam😭`,
			`Vitex Community!`,
			`Respect User😇`,
			`104567+ users!`,
			 `म बोट हुँ`,
			`सेक्स हिउँ जस्तो छ: तपाईलाई कहिले थाहा हुँदैन तपाईले कति इन्च पाउनुहुनेछ वा कति लामो हुन्छ यो।`,
			`nepali ho ni`
			`चान्स  पाएपछि नेपालीले गर्छ।`
			`SPAM न गर  बने को सुन्दैनस `
			`म बोट हो के  गर्चास `
	];
		let i = 0;
		setInterval(() => this.client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 4000);
	}

};
