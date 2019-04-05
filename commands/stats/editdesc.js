const commando = require('discord.js-commando');
const description = require('../../storage/description.json');
const fs = require('fs');

class DescriptionCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'editdesc',
            group: 'stats',
            memberName: 'editdesc',
            description: 'Change your account description!'
        });
    }

    async run(message, args)
    {
        if(!description[message.author.id]){
            description[message.author.id] = {
                desc: ""
            };
        }

        else
        {
        description[message.author.id].desc = "";
        description[message.author.id].desc = description[message.author.id].desc + args;
        message.channel.send("Successfully updated profile description!");
        fs.writeFile("storage/description.json", JSON.stringify(description), (err) =>{
            if(err){
                console.log(err);
                   }
            });
        }
    }
}

module.exports = DescriptionCommand; 