exports.run = (client, message, args) => {
    
       if  (!message.member.hasPermissions(["BAN_MEMBERS"])) return message.reply("__***você não tem permissão para BANIR!***__");
       let reason = args.slice(1).join(' ');
       let user = message.mentions.users.first();
      
       if (message.mentions.users.size < 1) return message.reply('__***SELECIONE O USUARIO!***__').catch(console.error);
      
       if (reason.length < 1) return message.reply('__***Você precisa de uma razão para BANIR!***__');
       
       if (!message.guild.member(user).bannable) return message.reply("__***Eu não posso BANIR esse cara ai não, rapaz!***__");
       let member = await = message.guild.member(user).ban(0)
    
       const Discord = require("discord.js");
       const embed = new Discord.RichEmbed()
           .setColor('872373')
           .setTimestamp()
           .addField('Ação:', '__***BAN***__')
           .addField('Usuario:', `${user.username}`)
           .addField('Staff:', `${message.author.username}`)
           .addField('Razão', reason)
           .setFooter('Boss Reth >bot')
       return message.channel.sendEmbed(embed).catch(console.error);
