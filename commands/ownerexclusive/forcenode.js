const commando = require('discord.js-commando');

class RestartCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'forcenode',
            group: 'ownerexclusive',
            memberName: 'forcenode',
            description: 'Forces the index node to run a non-existing init, which causes the code to freeze, and eventually set the bot to either restart if using pm2 or sharding, either shut down. you do not need to know about this command, since this is only for CrescentMoonZ#9906 uwu'
        });
    }

    async run(message)
    {
        if(message.author.id == "260102893477036032")
        {
            message.channel.sendMessage("``Forcing index node to run false init...``")
            .then();
            process.exit();
        }
        else
        {
            message.reply("Nice try 😉");
        }
    }
}

module.exports = RestartCommand;