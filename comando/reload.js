exports.run = (client, message, args) => {
    
 
    const r = "282504900552949760"
    const n = "401414281763094549"

        let reason = args.slice(0).join(' ');
    
 
  if (message.author.id === r || message.author.id === n){
        if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');
    
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    
        message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");
    
    } else {
        message.reply("**Sem permissão. :confused:**");
    }
    }
