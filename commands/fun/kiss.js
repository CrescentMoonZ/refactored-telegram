const commando = require('discord.js-commando');

class KissCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'kiss',
            group: 'fun',
            memberName: 'kiss',
            description: 'Kiss anyone you desire!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0){

            if(args == "") {
                message.reply("you can't kiss the void! That's plain off weird! :c")
            }

            else
            {
            message.channel.sendMessage(message.author + " kisses " + args + "!", {files: [__dirname + "/media/kiss/kiss1.gif"]});
            }
        }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 1 )
            if(args == "") {
                message.reply("you can't kiss the void! That's plain off weird! :c")
            }

            else
            {
            message.channel.sendMessage(message.author + " kisses " + args + "!", {files: [__dirname + "/media/kiss/kiss2.gif"]});
            }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 2 )
       if(args == "") {
           message.reply("you can't kiss the void! That's plain off weird! :c")
       }
       
       else
       {
       message.channel.sendMessage(message.author + " kisses " + args + "!", {files: [__dirname + "/media/kiss/kiss3.gif"]});
       }

    }
}

module.exports = KissCommand;