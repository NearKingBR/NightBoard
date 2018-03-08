exports.run = (client, message, args) => {
    
       if  (!message.member.hasPermissions(["KICK_MEMBERS"])) return message.reply("__***Você não tem permissão para KICKAR!***__");
       let reason = args.slice(1).join(' ');
       let user = message.mentions.users.first();
      
       if (message.mentions.users.size < 1) return message.reply('__***SELECIONE O USUARIO!***__').catch(console.error);
      
       if (reason.length < 1) return message.reply('__***Você precisa de uma razão para KICKAR!***__');
       
       if (!message.guild.member(user).kick) return message.reply("__***Eu não posso KICKAR esse cara ai não, rapaz!***__");
       let member = await = message.guild.member(user).kick(0)
    
       const Discord = require("discord.js");
       const embed = new Discord.RichEmbed()
           .setColor('872373')
           .setTimestamp()
           .addField('Ação:', '__***KICK***__')
           .addField('Usuario:', `${user.username}`)
           .addField('Staff:', `${message.author.username}`)
           .addField('Razão', reason)
           .setFooter('Boss Reth >bot')
return message.channel.sendEmbed(embed).catch(console.error);
