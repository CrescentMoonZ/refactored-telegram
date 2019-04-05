const commando = require('discord.js-commando');

class HugCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'hug',
            group: 'fun',
            memberName: 'hug',
            description: 'Hug anyone you desire!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0){

            if(args == "") {
                message.reply("you can't hug the void! :c")
            }

            else
            {
            message.channel.sendMessage(message.author + " hugs " + args + "!", {files: [__dirname + "/media/hug/hug1.gif"]});
            }
        }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 1 )
            if(args == "") {
                message.reply("you can't hug the void!:c")
            }

            else
            {
            message.channel.sendMessage(message.author + " hugs " + args + "!", {files: [__dirname + "/media/hug/hug2.gif"]});
            }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 2 )
       if(args == "") {
        message.reply("you can't hug the void!:c")
       }

       else
       {
       message.channel.sendMessage(message.author + " hugs " + args + "!", {files: [__dirname + "/media/hug/hug3.gif"]});
       }

    }
}

module.exports = HugCommand;