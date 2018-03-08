const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {// crie uma pasta chamada events
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});


client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
 
  try {        //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  //  console.error(err);
  }
 
});



bot.login(process.env.BOT_TOKEN);

