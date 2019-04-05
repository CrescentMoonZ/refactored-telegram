const commando = require('discord.js-commando');

class DailyRewardCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'daily',
            group: 'stats',
            memberName: 'daily',
            description: 'Claim your daily currency everyday!'
        });
    }

    async run(message)
    {
        
    }
}

module.exports = DailyRewardCommand;