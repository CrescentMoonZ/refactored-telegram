const commando = require('discord.js-commando');
const reputation = require('../../storage/reputation.json');
const fs = require('fs');

class RepCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'addrep',
            group: 'stats',
            memberName: 'addrep',
            description: 'Gives reputation to the user!'
        });
    }

    async run(message, args)
    {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser){
            message.channel.send("Sorry, I couldn't find that user! D:");
        }
        else
        {
        reputation[message.author.id].rep = reputation[message.author.id].rep + 1;
        message.channel.send("Successfully given reputation to the following user!");
        fs.writeFile("storage/reputation.json", JSON.stringify(reputation), (err) => {
            if(err){
                console.log(err);
                   }
            });

        if(!reputation[message.author.id]){
            reputation[message.author.id] = {
                rep: 0
            };
                }
        }
    }
}

module.exports = RepCommand;