const commando = require('discord.js-commando');

class WaifuCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'waifu',
            group: 'simple',
            memberName: 'waifu',
            description: 'hehe!'
        });
    }

    async run(message, args)
    {
        if(args == "project_fun")
{
message.channel.sendMessage("hehe.. well, it's not like i like mudae or anything.. but i guess i dont have a waifu");
}

        if(args == "tsudxroki")
{
    message.channel.sendMessage("holy moly, she has tons of waifus. I can't list them all here, sorry!");
}
        if(args == "mark")
{
    message.channel.sendMessage("oh.. him... I feel bad for him, he got no waifu D:");
}
        if(args == "yuyu")
{
    message.channel.sendMessage("~~she going for that bts gangggg~~ hmm.. I don't know who's her waifu.. If you know, DM CrescentMoonZ#9906 and tell him!")
}
        if(args == "jujube")
        {
            message.channel.sendMessage("She going for that frog, you know. Tsuyu Asui, or Asui Tsuyu.. I DONT KNOW AAAAAAAAAAAAAA");
        }

        if(args == "list")
        {
            message.channel.sendMessage("Lets see... In my list, I've got tsudxroki's waifu, yuyu's waifu, jujube's waifu, and thats pretty much it!");
        }
    if(args == "")
{
 message.reply("working on the command..");
}
   }

}   

module.exports = WaifuCommand;