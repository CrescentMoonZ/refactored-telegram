const commando = require('discord.js-commando');
const discord = require('discord.js');

class BotInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a little more about me!'
        });
    }


    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setDescription("How was PROJECT_FUN created? Well, it's simple actually! One day, CrescentMoonZ#9906 asked someone ou- nevermind, let me make a story up. One day, CrescentMoonZ#9906 woke up and thought, ''hmm.. i should do something productive today..'' and he decided to create, well, a discord bot!")
        .setColor(0x9d5af4)
        .setThumbnail('https://media.discordapp.net/attachments/524378798905491458/546442328219320333/PROJECT_FUN2.jpg?width=457&height=609')
        .setTitle("Here's some info about PROJECT_FUN!")
        .setFooter("Currently running on 2 servers!")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BotInfoCommand;