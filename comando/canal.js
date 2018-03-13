const db = require('quick.db')

exports.run = (client, message, args) => {

    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("**Você não pode usar esse comando!**");
      if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return message.channel.send('**Mecione o canal**\n > *.canal #canal*') // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log

    let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') newChannel = ''; 
    else newChannel = message.mentions.channels.first().id; 

    db.updateText(`messageChannel_${message.guild.id}`, newChannel).then(i => {
      message.channel.send( `**Canal selecionado ${message.mentions.channels.first()}**`) 
    })
}
