const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MTA4MDU0Mzk4Njk1Mjk3NDQ0OA.GQC1pW.vP3hGtSJE0uiUMYfrrRTkJcEwsTAgot9fghdLo');
