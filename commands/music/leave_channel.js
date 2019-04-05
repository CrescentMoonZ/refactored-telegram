const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: "Leaves the user's voice channel, I guess..."
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection) 
        {
            message.guild.voiceConnection.disconnect();
            message.channel.sendMessage("Sadly, I have left " + message.author + "'s voice channel...");
        }
        else
        {
            message.reply("Boi I must be in a channel to leave it!");
        }
    }
}

module.exports = LeaveChannelCommand;