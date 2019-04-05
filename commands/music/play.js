const ytdl = require('ytdl-core');
const commando = require('discord.js-commando');
const Discord = require('discord.js');


exports.run = async(client, message, args, ops) => {



    if(!message.member.voiceChannel) return message.send('Woah there, my pal' + message.author + '! You must be in a voice channel first! You go, I follow!');

    if(message.guild.me.voiceChannel) return message.send("Woah there, my pal" + message.author + "! You're supposed to know already that I can't clone myself; I'm already connected to a voice channel!");

    if(!args[0]) return message.channel.send('Sorry, But you must provide me a link following the command!');

    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send('Please input a **valid** url following the command!');

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voiceChannel.join();

    let dispatcher = await connection.play(ytdl(args[0], {filter: 'audioonly' }));

    message.channel.send(`Now Playing: **${info.title}**`);
}

/*const commando = require('discord.js-commando');

class PlayCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'music',
            description: 'T35T1NG **FUN**CT10N'
        });
    }

    async run(message, args)
    {

    }
}

module.exports = PlayCommand;
*/