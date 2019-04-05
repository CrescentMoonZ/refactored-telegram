const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rtd',
            group: 'simple',
            memberName: 'rtd',
            description: 'Rolls a die!'
        });
    }

    async run(message, args)
    {
        let diceroll;
        if(args == "")
       {
        diceroll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your dice landed on a " + "**" + diceroll + "**" + "!");
       }
         else
         {
             diceroll = Math.floor(Math.random() * args) + 1;
             message.reply("Your dice landed on a " + "**" + diceroll + "**" + "!");
         }
    }
}   

module.exports = DiceRollCommand;