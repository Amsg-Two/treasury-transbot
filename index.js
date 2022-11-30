const Discord = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
//just the quick required djs class
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//client instancing n shit
const { config } = require('./config.json');

//log when bot is ready, show which user the bot is logged in as in the Console
client.once('Ready', () => {
  console.log("Ready to trans the brits, logged in as "+client.user.username);
})

client.on('messageCreate', msg => {
if (msg.guildid == '1029033907112390756') {
  msg.react('🏳️‍⚧️').then(console.log).catch(console.error);
  console.log('Reacted to '+msg.author+' with the trans flag at '+new Date());
}
})
+client.login(token);
