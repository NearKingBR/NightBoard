exports.run = (client, message, args) => {
    
 
    const r = "235075700262961152"
    const n = "235075700262961152"

        let reason = args.slice(0).join(' ');
    
 
  if (message.author.id === r || message.author.id === n){
        if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');
    
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    
        message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");
    
    } else {
        message.reply("**Sem permissão. :confused:**");
    }
    }
