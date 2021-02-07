require("express")().listen(1343);//お |  UmuTR.exe  | ❆

const db = require("quick.db"); 
const discord = require("discord.js");//お |  UmuTR.exe  | ❆
const client = new discord.Client({ disableEveryone: true });//お |  UmuTR.exe  | ❆
client.login(ODAzNjM3NTM2NDQyNDE3MjAy.YBArxw.Legn_7rHuECLtGW8OcACIR7MV7w);
const fetch = require("node-fetch");
const fs = require('fs')//お |  UmuTR.exe  | ❆




setInterval(() => {
  var links = db.get("linkler");//お |  UmuTR.exe  | ❆
  if(!links) return 
  var linkA = links.map(c => c.url)//お |  UmuTR.exe  | ❆
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")//お |  UmuTR.exe  | ❆
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {//お |  UmuTR.exe  | ❆
db.set("linkler", [])
}//お |  UmuTR.exe  | ❆
})

client.on("ready", () => {
  client.user.setActivity(`!yardım | UptimeBot |`)//お |  UmuTR.exe  | ❆
  console.log(`Logined`)//お |  UmuTR.exe  | ❆
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//お |  UmuTR.exe  | ❆
  if(spl[0] == "!ekle") {
  var link = spl[1]//お |  UmuTR.exe  | ❆
  fetch(link).then(() => {//お |  UmuTR.exe  | ❆
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**<a:hayr:803651689168502794> Bu bot zaten uptime ediliyor.**")//お |  UmuTR.exe  | ❆
    
    let yardım = new Discord.RichEmbed()//お |  UmuTR.exe  | ❆
        .setColor(0x6A3DB8)
        .setDescription("**<a:evet:803651989640708120> Başarılı! Projeniz artık 7/24!**")//お |  UmuTR.exe  | ❆
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(yardım).then(msg => msg.delete(60000)); //お |  UmuTR.exe  | ❆
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım = new Discord.RichEmbed()//お |  UmuTR.exe  | ❆
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("<a:aktf:803651783280033813> **Hata! Sadece düzgün url'ler ekleyebilirsiniz.**")//お |  UmuTR.exe  | ❆
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()

   return message.channel.send(yardım).then(msg => msg.delete(60000)); //お |  UmuTR.exe  | ❆
  })
  }
})


client.on("message", message => {//お |  UmuTR.exe  | ❆
  if(message.author.bot) return;
  var spl = message.content.split(" ");//お |  UmuTR.exe  | ❆
  if(spl[0] == "!botsay") {//お |  UmuTR.exe  | ❆
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//お |  UmuTR.exe  | ❆
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//お |  UmuTR.exe  | ❆
  if(spl[0] == "!yardım") {
let embed = new Discord.RichEmbed()//Dお |  UmuTR.exe  | ❆
.setColor('#ffcdf9')
.addField(` Botumuzu Davet Etmek isterseniz`,`[Botu Davet Et!](https://discord.com/api/oauth2/authorize?client_id=803637536442417202&permissions=8&scope=bot)`)
.setDescription(`**Uptime komudunu kullandıktan sonra sisteme eklenmesi için 3-5 dk bekleyin.**

 🌙 **!yardım** : Botun yardım menüsünü açar.

 🔋 **!ekle <link>** : Eklediğiniz proje linkini 7/24 açık yapar.

 ⚡ **!botsay** : Botumuzla uptime olan proje sayısını gösterir.

 🔮 **!botbilgi** : Botun istastistik verilerini gösterir.

`)
.setAuthor(`UptimeBOT | Yardım Menüsü`, client.user.avatarURL)
.setFooter(`UptimeBOT | Kurucumun id : 800052450479439923`)//お |  UmuTR.exe  | ❆
.setImage(`https://cdn.discordapp.com/attachments/741014134576906332/741980222101913600/unknown.png`)
return message.channel.send(embed);//お |  UmuTR.exe  | ❆
    }
  
  })
  const log = message => {//お |  UmuTR.exe  | ❆
  console.log(`${message}`);
}
  
client.on("message", message => {
    if(message.author.bot) return;
    var spl = message.content.split(" ");
    if(spl[0] == "!botbilgi") {
    var link = spl[1]
    message.channel.send(`**<a:bakm:803709033747316736> Yapım Aşamasında**`)
    };
});


//coded by お |  UmuTR.exe  | ❆
  

  