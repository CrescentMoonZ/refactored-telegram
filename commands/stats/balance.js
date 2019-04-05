const commando = require('discord.js-commando');

class BalanceCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'balance',
            group: 'stats',
            memberName: 'balance',
            description: 'Claim your daily currency everyday!'
        });
    }

    async run(message)
    {
        
    }
}

module.exports = BalanceCommand;