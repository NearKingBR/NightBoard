const db = require('quick.db')

exports.run = (client, message, args) => {

    
      if (!message.mentions.channels.first() && args.join(" ").toUpperCase() !== 'NONE') return message.channel.send('**Mecione o canal**\n > *r!canal #canal*') // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log

    // Fetch the new channel they mentioned
    let newChannel;
    if (args.join(" ").toUpperCase() === 'NONE') newChannel = ''; // If they wrote the word none, it sets newChannel as empty.
    else newChannel = message.mentions.channels.first().id; 

    // Update Channel
    db.updateText(`messageChannel_${message.guild.id}`, newChannel).then(i => {
      message.channel.send( `**Canal selecionado ${message.mentions.channels.first()}**`) 
    })
}
