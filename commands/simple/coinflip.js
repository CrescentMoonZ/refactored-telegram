const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, gives either Heads or Tails, I guess...'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
            message.reply("Your coin landed on... **Heads!**", {files: [__dirname + "/coinfiles/heads.png"]});
        }
        else
        {
            message.reply("Your coin landed on... **Tails!**", {files: [__dirname + "/coinfiles/tails.png"]});
        }
    }
}

module.exports = CoinFlipCommand;