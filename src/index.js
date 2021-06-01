const BikiClient = require('../src/Structures/BikiClient');
const dconfig = require('../config.json');

const dclient = new BikiClient(dconfig);


const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
client.db = require("quick.db");
client.request = new (require("rss-parser"))();

client.on("ready", () => {
    console.log("I'm ready!");
    handleUploads();
});
//client.on("ready", ()=>console.log("READY"));
//define welcome "package"
//const welcome = require("../welcome");
//const { loadImage } = require('canvas');
//welcome(client)


dclient.start();
