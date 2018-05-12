const Discord = require('discord.js');
const db = require('quick.db')

  
exports.run = (client, message, args)  => {
  
      const q = "401414281763094549"
    const ownerID = "282504900552949760"
    if(message.author.id !== ownerID)
    if(message.author.id !== q)
        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("**Você não pode usar esse comando!**");

    var user = message.mentions.users.first()
    let reason1 = args.slice(2).join(' ');
    if (message.mentions.roles.size <1) return message.reply("**Mencione o Cargo**");
    if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para eu dar o cargo!**");
    if (reason1.length < 1) return message.reply('Voce Nao Falou O Tempo!(m para minutos, h para horas, s para segundos e d para dias) ')
    
      
var achar = message.mentions.roles.first().id
var cargoid = achar.id
var tempo = args.slice(2).join(" ")
var achartudo = tempo.indexOf("h")
if (achartudo < 0) {
var achartudo2 = tempo.indexOf("d")
if (achartudo2 < 0) {
    var achartudo3 = tempo.indexOf("s")
    if (achartudo3 < 0) {
        var achartudo4 = tempo.indexOf("m")
        if (achartudo4 < 0) return message.reply("Escolha Uma Unidade De tempo! **d para dias, h para horas, m para minutos e s para segundos!**")
      
}
}}
  
var acharo = tempo.indexOf("h")
if (0  < acharo){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*60*60*parseInt(tempo2)
};
var acharo2 = tempo.indexOf("m")
if (0  < acharo2){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*60*parseInt(tempo2)
};
var acharo3 = tempo.indexOf("s")
if (0  < acharo3){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*parseInt(tempo2)
};
var acharo4 = tempo.indexOf("d")
if (0  < acharo4){
  var tempo2 =  tempo.replace(/h/g,"")
var temporeal = 1000*60*60*24*parseInt(tempo2)
};

        
message.guild.members.get(message.mentions.users.first().id).addRole((message.mentions.roles.first().id));
var trocar = args.slice(2).join(" ")
var a1 = trocar.indexOf("h")
if ( 0 < a1)
{
  var real = trocar.replace(/h/g," Horas" )
}
var a2 = trocar.indexOf("d")
if ( 0 < a2)
{
  var real = trocar.replace(/d/g," Dias" )
}
var a3 = trocar.indexOf("m")
if ( 0 < a3)
{
  var real = trocar.replace(/m/g," Minutos" )
}
var a4 = trocar.indexOf("s")
if ( 0 < a4)
{
  var real = trocar.replace(/s/g," Segundos" )
}

db.fetchObject(`messageChannel_${message.guild.id}`).then(i => {
  
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setTitle("**•Promovido**")
.setDescription("**• Informações:**")
.addField(":smiling_imp:__**Vip:**__", `\`\`\`js\n${user.username}\`\`\``)
.addField("__**Quem executou:**__ ",  `\`\`\`css\n[${message.author.username}]\`\`\``)
.addField("__**Cargo:**__", `\`\`\`css\n${message.mentions.roles.first().name}\`\`\``)
.addField(":turtle:__**Tempo do cargo:**__", `\`\`\`js\n${real}\`\`\``)
.setTimestamp()

client.channels.get(i.text).send({embed: embed})
})
    setTimeout(() => {
message.guild.members.get(message.mentions.users.first().id).removeRole((message.mentions.roles.first().id));
message.channel.send("O tempo do " + user + " acabou!" )

}, temporeal)}

  
