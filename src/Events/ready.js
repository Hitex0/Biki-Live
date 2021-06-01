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
			`.help📞`,
			`Acivity📸`,
			`Music Nepal Bot💖`,
			`Vitex Community🌐`,
			`Read Rules🧾`,
			`Keep Respect😇`,
			`104567+ users!💖`,
			`Your Dm♨️`,
			
	];
		let i = 0;
		setInterval(() => this.client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 4000);
	}

};
