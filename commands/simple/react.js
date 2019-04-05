const commando = require('discord.js-commando');

class ReactCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'status',
            group: 'simple',
            memberName: 'status',
            description: 'Checks the bot status!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 0);
        if(chance == 0){

            if (message.content == 'f!status') {
                message.react('✅')
                .then();
                    message.channel.sendMessage("Bot is on and functional!");
            }

            //✅ 🔶 🔴
            /*
            if(message.content == !botstatus {
                message.react('🔶');
                message.channel.sendMessage("Bot is functioning a bit slower than usual...");
            })
            
           
           if (message.content == '!botstatus') {
            message.react('✅');
            message.channel.sendMessage("Bot is working!");
        }
            */
            
        }
            else
            {
            console.log('w0t');
            }
    }
}

module.exports = ReactCommand;