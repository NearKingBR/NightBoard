const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('guildMemberAdd', member => {
       member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);
       console.log(`${member.user.username} has joined`);
});
