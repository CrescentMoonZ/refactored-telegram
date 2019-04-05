const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'spoiler',
            group: 'simple',
            memberName: 'spoiler',
            description: 'Set text as a spoiler! Spoiler text only works on the newer versions of Discord :v'
        });
    }

    async run(message, args)
    {
        if(args == "") {
            message.channel.sendMessage("Woah " + message.author + "! You need to include the text you want to be set as spoiler! Example: !spoiler lol");
        }
        if(args) {
            message.channel.sendMessage("Spoiler: ||" + args + "||");
        }
    }
}

module.exports = CoinFlipCommand;