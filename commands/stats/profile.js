const Commando = require('discord.js-commando');
const discord = require('discord.js');
const reputation = require('../../storage/reputation.json');
const description = require('../../storage/description.json');
const balance = require('../../storage/userData.json');
const fs = require('fs');

class ProfileCommand extends Commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'profile',
            group: 'stats',
            memberName: 'profile',
            description: "Shows off the user's profile!"
        });
    }

    async run(message, args)
    {
        let targetUser = message.guild.member(message.mentions.users.first());
        let sender = message.author;

        if(!reputation[sender.id]){
            reputation[sender.id] = {
                rep: 0
            };
        }

        if(!description[sender.id]){
            description[sender.id] = {
                desc: `No description set. To change your description, type "f!editdesc [description]"`
            };
        }

        if(!balance[sender.id]){
            balance[sender.id] = {
                money: "To view your balance, type f!balance."
            }
        }
        
        if(!targetUser){
            let ProfileEmbed = new discord.RichEmbed()
            .setTitle(sender.username + "'s Profile")
            .addField("Description: ", (description[sender.id].desc).toString(), false)
            .addField("Reputation: ", (reputation[sender.id].rep).toString(), false)
            .addField("Money: ", (balance[sender.id].money).toString(), false)
            message.channel.send(ProfileEmbed);
        }
    }
}

module.exports = ProfileCommand;