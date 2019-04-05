const commando = require('discord.js-commando');

class NomCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'nom',
            group: 'fun',
            memberName: 'nom',
            description: 'Nom anyone you desire!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0){

            if(args == "") {
                message.reply("You can't nom the void! That's called breathing! :c")
            }

            else
            {
            message.channel.sendMessage(message.author + " noms " + args + "!", {files: [__dirname + "/media/nom/nom1.gif"]});
            }
        }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 1 )
            if(args == "") {
                message.reply("You can't nom the void! That's called breathing! :c")
            }

            else
            {
            message.channel.sendMessage(message.author + " noms " + args + "!", {files: [__dirname + "/media/nom/nom2.gif"]});
            }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 2 )
       if(args == "") {
        message.reply("You can't nom the void! That's called breathing! :c")
       }

       else
       {
       message.channel.sendMessage(message.author + " noms " + args + "!", {files: [__dirname + "/media/nom/nom3.gif"]});
       }

    }
}

module.exports = NomCommand;