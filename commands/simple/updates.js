const commando = require('discord.js-commando');
const discord = require('discord.js');

class UpdatesCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'updates',
            group: 'simple',
            memberName: 'updates',
            description: 'View the latest updates!'
        });
    }


    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .addField("Bot Created On:", "16th January 2019, at 2PM EST Time")

        .setAuthor("Updates", "https://cdn.discordapp.com/avatars/260102893477036032/91852ea8e6242ac3f2e37d7e05ed8cc1.webp?size=1024")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setURL("https://bit.ly/2DRsLZJ") //https://discordapp.com/invite/AafVamV
        .setColor(0x00AE86)
        .setDescription("Here are the latest updates!")
        .setFooter("Last Updated on the April 2nd, 2019", "https://cdn.discordapp.com/avatars/260102893477036032/91852ea8e6242ac3f2e37d7e05ed8cc1.webp?size=1024")
        .setThumbnail("https://cdn.discordapp.com/avatars/535267171341697046/3088bc4b9cfe11248b07121e5af93ca2.webp?size=1024")

        .addField("!eat into !nom", "Renamed the eat command into nom!", " ")
        .addBlankField(" ")
        .addField("more media owo", "Changed the gifs for the FUN commands!", " ")
        .addField("more commands uwu", "Added the !updates command you just used!", " ")
        .addField("lolies!", "Added the !loli command!", " ")
        .addBlankField(" ")
        .addField("goodbye links!", "Removed the links that appear when you type a command from the fun section!", " ")
        .addField("added !balance and !daily", " ")
        .addField("added !rep command", " ")
        .addField("added !profile and !editdesc", " ")
        .addField("added !quiz", " ")
        .addField("added !spoilertext", " ")
        .addField("changed prefix to f!", " ")
        .addField("Working on:", "Server CrossOver! This might sound like an edgy name, but you'll see what it does IF I SUCCEED IN MAKING IT!", " ")



        .addBlankField(true)

        message.channel.sendEmbed(myInfo);

    }

    
}

module.exports = UpdatesCommand;