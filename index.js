const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const sql = require("sqlite");
const db = require('quick.db');
const size    = config.colors;
const rainbow = new Array(size);
client.on("guildMemberAdd", member => {
setTimeout(() => {
member.guild.members.get(member.user.id).sendMessage("Oiee nenem, ta no tédio? Entra no Discord Crazy-Life, Super recomendo, La muita coisa legal, Eventos Diarios, Desafios, e muitos Chats para Interação, Amizades etc.. :smiling_imp::smiling_imp::heart_eyes::heart:️ https://discord.gg/G3uAH5j ")
}, 30 * 1000);
})

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {// crie uma pasta chamada events
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});


client.on('ready', () => {
	client.user.setActivity('amor pro Near' , 'https://twitch.tv/monstercat');

});



client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
 
  try {        //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./comando/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    
console.error(err);
  }
 
});



client.login(process.env.BOT_TOKEN);
