exports.run = (client, message, args) => {
 const Discord = require('discord.js');
 msgArgs=message.content.split(' ');
var potentialColor = msgArgs[1];

var defaultColor = "#A70000";
console.log("[EvilsCustomEmbed] customColor: "+ potentialColor);

var msg=message.content.substring(message.content.indexOf(" ")+1,message.content.length);
var embed=new Discord.RichEmbed().setDescription(msg).setColor(defaultColor);

msg=(msg.substring(msg.indexOf(" ")));
try{
  message.edit("");
  //message.edit('', { embed }) alternate form of sending
  console.log("[EvilsCustomEmbed]: original msg " + message.content);
  var isC  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(potentialColor);
  if(isC)
    var embed=new Discord.RichEmbed().setDescription(msg).setColor(potentialColor);
  message.channel.sendEmbed(embed);
}catch(err) {
  console.log("[EvilsCustomEmbed] RIIIIP custom color")
  message.edit("");
}

message.delete();
}
