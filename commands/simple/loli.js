
const commando = require('discord.js-commando');

class LoliCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'loli',
            group: 'simple',
            memberName: 'loli',
            description: 'pre-launched feature'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 1);
            if(message.author.id == "260102893477036032") { //my id
               message.channel.sendMessage("shut up mark, you don't need any lolies");
            } //    message.reply("Your coin landed on... **Heads!**", {files: [__dirname + "/coinfiles/heads.png"]});
        
        {
            if(message.author.id == "501124872181907459") { //sasha's id
                message.channel.sendMessage('Hey Sasha! Here is your loli, Yuuki Konno!', {files: [__dirname + "/lolicontent/sasha/yuuki.png"]});
            }
             //        message.reply("Your coin landed on... **Tails!**", {files: [__dirname + "/coinfiles/tails.png"]});
        }

        if(message.author.id == "240947072281477120") { //jackie's id
            message.channel.sendMessage('Hey Jackie! Here is your loli, Shiro!', {files: [__dirname + "/lolicontent/jackie/shiro.jpg"]});
        }

        if(message.author.id == "395619224246157312") { //luc's id
            message.channel.sendMessage('Hey Luc! Here is your loli, Raphtalia!', {files: [__dirname + "/lolicontent/luc/raphtalia.png"]});
        }

        if(message.author.id == "371996985965674496") { //loik's id
            message.channel.sendMessage("Hey Loik! Here is your loli, Shiina!", {files: [__dirname + "/lolicontent/loik/shiina.png"]});
        }

        if(message.author.id == "419258855759937536") { //vulan's id
            message.channel.sendMessage("Hey Vulan! Here is your trap- i mean, loli, Astolfo!", {files: [__dirname + "/lolicontent/vulan/astolfo.png"]});
        }

        if(message.author.id == "506980029540859925") { //amin's id
            message.channel.sendMessage('Hey Amin! Here is your "loli", Ochaco Uraraka!', {files: [__dirname + "/lolicontent/amin/ochaco.jpg"]});
        }

        if(message.author.id == "262031622138888194") { //nathan's id
            message.channel.sendMessage("Hey Nathan! Here is your loli, Noel!", {files: [__dirname + "/lolicontent/nathan/noel.gif"]});
        }

        if(message.author.id == "371394534258507796") { //christopher's id
            message.channel.sendMessage('Hey Christopher! Here is your "mature loli", Mavis Dracula!', {files: [__dirname + "/lolicontent/christopher/mavis.jpg"]});
        }

        if(message.author.id == "520769088985759745") { //yuyu's id
            message.channel.sendMessage('Hey Yu-Lin! Here is your "mature male ***loli*** ", J-Hope!', {files: [__dirname + "/lolicontent/yulin/jhope.jpg"]});
        }

        if(message.author.id == "372135653510742016") { //pascal's id
            message.channel.sendMessage('Hey Pascal! Here is your loli, Megumin!', {files: [__dirname + "/lolicontent/pascal/megumin.jpg"]});
        }

        if(message.author.id == "530019500246958081") { //juliane's id
            message.channel.sendMessage('Hey Juliane! Here is your "loli", Tsuyu Asui! Or is it Asui Tsuyu? I GIVE UP AAAAAA', {files: [__dirname + "/lolicontent/juliane/v.jpg"]});
        }
    }

}

module.exports = LoliCommand;