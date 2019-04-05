const commando = require('discord.js-commando');

class SmileCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'smile',
            group: 'fun',
            memberName: 'smile',
            description: 'Smile!'
        });
    }

    async run(message)
    {
        var chance = Math.floor(Math.random() * 3);
        if(chance == 0){
            message.channel.sendMessage(message.author + " smiles!", {files: [__dirname + "/media/smile/smile1.gif"]});
        }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 1 ){
        message.channel.sendMessage(message.author + " smiles!", {files: [__dirname + "/media/smile/smile2.gif"]});
            }
       /////////      ///////////       //////////////////////       //////////////////       ///////////////        //////////////     ////////////////

       if(chance == 2 ){
       message.channel.sendMessage(message.author + " smiles!", {files: [__dirname + "/media/smile/smile3.gif"]});
       }

    }
}

module.exports = SmileCommand;