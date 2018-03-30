exports.run = (client, message, args) => {


    const q = "401414281763094549"
    const ownerID = "282504900552949760"
    if(message.author.id !== ownerID)
    if(message.author.id !== q)
        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("**Você não pode usar esse comando!**");
           let reason = args.slice(0).join(' ');
            if (message.author.id === dono) {
        if (reason.length < 1) return message.reply('**Diga o comando que devo reiniciar!**');
          delete require.cache[require.resolve(`./${args[0]}.js`)];
            message.channel.sendMessage("**:gear: " + message.author + " Comando " + args[0] + " reiniciado!**");
        } else {
        message.reply("**Sem permissão. :confused:**");
    }
    }
