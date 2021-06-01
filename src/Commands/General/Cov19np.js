const Command = require('../../Structures/Command');
const request = require('request');
const cheerio = require('cheerio');

var urls = [];

request("https://www.worldometers.info/coronavirus/country/nepal/", function(err, resp, body){
    if(!err && resp.statusCode == 200)
    {
        var $ = cheerio.load(body);
        $('span').each(function(){

            var url = $(this).text();
            urls.push(url);
            
        });
        
    }

});
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['cov19'],
			description: 'This provides Covid 19 infos',
			category: '<:amongus:848974047308283914>__General__'
		});
	}

	async run(message) {
        const msg = await message.channel.send('Genetating Latest Information....');
        const latency = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`**Latest Coronavirus Update of Nepal🇳🇵**\n \n🦠 Coronavirus Cases: **${(urls[4])}**\n \n💀 Deaths: **${(urls[5])}** \n \n😇 Recovered: **${(urls[6])}**   \n` );
        console.log(`${message.author.tag} generated Cov19 Info in ${message.guild.name} ✅ \n`);
		
	}

};
