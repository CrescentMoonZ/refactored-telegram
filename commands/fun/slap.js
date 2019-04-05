const commando = require('discord.js-commando');

class SlapCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'slap',
            group: 'fun',
            memberName: 'slap',
            description: 'Slap anyone you desire!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 1);
        if(chance == 0){

            if(args == message.author)
            {
            message.channel.sendMessage(message.author + " slap themselves! Wow, " + message.author + " must really be mad..", {files: [__dirname + "/media/slap/slap1.gif"]});
            }

            else
            {
            if(args == "") {
                message.reply("you can't slap the void! That'd look weird! >:c")
            }

            else
            {
            message.channel.sendMessage(message.author + " slaps " + args + "!", {files: [__dirname + "/media/slap/slap1.gif"]});
            }
        }
        }
    }
}

module.exports = SlapCommand;