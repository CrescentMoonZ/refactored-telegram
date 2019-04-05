const commando = require('discord.js-commando');

class BlushCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'blush',
            group: 'fun',
            memberName: 'blush',
            description: 'Blush!'
        });
    }

    async run(message)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0){
            message.channel.sendMessage(message.author + " blushes!", {files: [__dirname + "/media/blush/blush1.gif"]});
        }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 1 ){
        message.channel.sendMessage(message.author + " blushes!", {files: [__dirname + "/media/blush/blush2.gif"]});
            }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 2 ){
       message.channel.sendMessage(message.author + " blushes!", {files: [__dirname + "/media/blush/blush3.gif"]});
       }

    }
}

module.exports = BlushCommand;