const commando = require('discord.js-commando');

class ImageCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'image',
            group: 'simple',
            memberName: 'image',
            description: 'Looks up an image, depending on your search.'
        });
    }

    async run(message, args)
    {

    }
}

module.exports = ImageCommand;