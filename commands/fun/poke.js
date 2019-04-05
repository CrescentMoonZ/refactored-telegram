const commando = require('discord.js-commando');

class PokeCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'poke',
            group: 'fun',
            memberName: 'poke',
            description: 'Poke anyone you desire!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 1);
        if(chance == 0){

            if(args == message.author)
            {
            message.channel.sendMessage(message.author + " poke themselves! Wow!", {files: [__dirname + "/media/poke/poke1.gif"]});
            }

            else
            {
            if(args == "") {
                message.reply("you can't poke the void! That's called pointing! :c")
            }

            else
            {
            message.channel.sendMessage(message.author + " pokes " + args + "!", {files: [__dirname + "/media/poke/poke1.gif"]});
            }
        }
        }
    }
}

module.exports = PokeCommand;