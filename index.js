const Commando = require('discord.js-commando');
const Discord = require('discord.js');

const Canvas = require('canvas');
const snekfetch = require('snekfetch');

const client = new Commando.Client({commandPrefix: 'f!'});
const TOKEN = 'NTM1MjY3MTcxMzQxNjk3MDQ2.DyFqBA.EcfwqxAB8Sxymz42P6ZIjTWSDLU'

const fs = require('fs');
const moment = require('moment');

var cheerio = require('cheerio');
var request = require('request');

client.registry.registerGroup('simple', 'Simple');
client.registry.registerGroup('music', 'Music');
client.registry.registerGroup('fun', 'Fun');
client.registry.registerGroup('stats', 'Stats');
client.registry.registerGroup('ownerexclusive', 'Ownerexclusive');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');


global.servers = {};

client.on('message', message => {
    
    // JSON File
    let userData = JSON.parse(fs.readFileSync('storage/userData.json'));

    // Variables \\
    let sender = message.author;
    let msg = message.content.toUpperCase();
    let prefix = "f!";

    let x = message.guild.id;

    var voxan = '539116939306598420';
    var crossvoxan = '563142538609950780';

    var fun = '535275421588127744';
    var crossfun = '563142757363744773';

    var parts = message.content.split(" ");

    // Events \\
    //if(!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].money) userData[sender.id].money = 500;
    if(!userData[sender.id].lastDaily) userData[sender.id].lastDaily = 'Not collected';

    fs.writeFile('storage/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    })

    if(msg == 'F!BALANCE') {

        const moneyEmbed = new Discord.RichEmbed()
            .setTitle('Bank')
            .setColor(0xF1C40F)
            .addField('Account Holder', message.author.username, true)
            .addField('Account Balance', userData[sender.id].money + "$", true)
        message.channel.send(moneyEmbed)
    }

    if(msg == 'F!DAILY'){
        if(userData[sender.id].lastDaily != moment().format('L')){
           userData[sender.id].lastDaily = moment().format('L')
           userData[sender.id].money += 25;

           const dailyEmbed = new Discord.RichEmbed()
                .setTitle('Daily Reward')
                .setDescription('25$ has been added to your account!')
            message.channel.send(dailyEmbed)

        } else {
            const dEmbed = new Discord.RichEmbed()
                .setTitle('Daily Reward')
                .setDescription('You have already collected your daily reward! You can collect your next reward ' + moment().endOf('day').fromNow() + '.')
            message.channel.send(dEmbed)


        }

    fs.writeFile('storage/userData.json', JSON.stringify(userData), (err) => {
        if(err) console.error(err);
    })
}

       if(message.author.id == '535267171341697046') {
            console.log('ignored');
        }

    else {

        if(x == fun)
        {

        if(message.channel.id == crossfun)
            {
                client.guilds.get(voxan).channels.get(crossvoxan).send(message.author.username + ' says: ' + message.content);
            }

        else
        {
            
        }

    }

        else{
            if(x == voxan)
            {

            if(message.channel.id == crossvoxan)
                {
                    client.guilds.get(fun).channels.get(crossfun).send(message.author.username + ' says: ' + message.content);
                }

            else
            {
                
            }

        }
    }
}

if(parts[0] == "f!image") {

    image(message, parts);
}

function image(message, parts) {

	/* extract search query from message */

	var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"

	var options = {
	    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
	    method: "GET",
	    headers: {
	        "Accept": "text/html",
	        "User-Agent": "Chrome"
	    }
	};
	request(options, function(error, response, responseBody) {
		if (error) {
			// handle error
			return;
		}

		/* Extract image URLs from responseBody using cheerio */

		$ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)

		// In this search engine they use ".image a.link" as their css selector for image links
		var links = $(".image a.link");

		// We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
		// this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
		var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
		console.log(urls);
		if (!urls.length) {
            // Handle no results
            message.channel.send(message.author + ", please provide me something to search for. Example; f!image animals");
			return;
		}

		// Send result
		message.channel.send("Results: " + urls[0]);
	});

}

})

client.on('ready', () => {
    howmany = client.guilds.size;
    console.log(client.user.username + " is updated! It's running on " + howmany + " guilds!");
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: " on " + client.guilds.size + " servers!",
            type: "STREAMING",
            url: "https://www.twitch.tv/overwatchleague"
        }
    });
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Left the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

client.login(TOKEN); 