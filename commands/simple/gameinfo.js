const commando = require('discord.js-commando');
const discord = require('discord.js');

class BotInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'gameinfo',
            group: 'simple',
            memberName: 'gameinfo',
            description: 'Learn a little more about various games!'
        });
    }


    async run(message, args)
    {
            if(args)
            {
        if(args == "warframe")
        {
        var gameInfo = new discord.RichEmbed()
        .setDescription("Set in an extremely far future, players control the members of the Tenno, a race of ancient warriors who have awoken from a century long cryosleep to find themselves at war with the Grineer, a matriarchal race of militarized and deteriorated human clones built upon metal, blood, and war; the Corpus, a mega-corporation with advanced robotics and laser technology built upon profit; the Infested, disfigured victims of the Technocyte virus, a reference to Dark Sector and the Sentients, a race of self-replicating machines returning from a stellar system known as the Tau system after being driven back centuries ago in an ancient war. To fight back, the Tenno use remotely controlled bio-mechanical suits to channel their unique abilities – Warframes.")
        .setColor(3093151)
        .setThumbnail('https://i.imgur.com/Jkq5UIF.png')
        .setTitle("Game Info: Warframe")
        .setFooter("“Warframe isn’t an easily approachable game, but it’s one that’s worth getting comfortable with. We rate it an 8.6 out of 10. -IGN")
        message.channel.sendEmbed(gameInfo);
        }

        if(args == "Warframe")
        {
        var gameInfo = new discord.RichEmbed()
        .setDescription("Set in an extremely far future, players control the members of the Tenno, a race of ancient warriors who have awoken from a century long cryosleep to find themselves at war with the Grineer, a matriarchal race of militarized and deteriorated human clones built upon metal, blood, and war; the Corpus, a mega-corporation with advanced robotics and laser technology built upon profit; the Infested, disfigured victims of the Technocyte virus, a reference to Dark Sector and the Sentients, a race of self-replicating machines returning from a stellar system known as the Tau system after being driven back centuries ago in an ancient war. To fight back, the Tenno use remotely controlled bio-mechanical suits to channel their unique abilities – Warframes.")
        .setColor(3093151)
        .setThumbnail('https://i.imgur.com/Jkq5UIF.png')
        .setTitle("Game Info: Warframe")
        .setFooter("“Warframe isn’t an easily approachable game, but it’s one that’s worth getting comfortable with. We rate it an 8.6 out of 10. -IGN")
        message.channel.sendEmbed(gameInfo);
        }

        if(args == "fortnite")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build, Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing, and Fortnite Creative, where players are given complete freedom to create worlds and battle arenas. The first two game modes were released in 2017 as early access titles and Creative was released on December 6, 2018. Save the World is available only for Windows, macOS, PlayStation 4, and Xbox One, while Battle Royale has been released for those platforms in addition for Nintendo Switch, iOS and Android devices. While the first two games have been successful for Epic Games, Fortnite Battle Royale became a resounding success, drawing in more than 125 million players in less than a year and earning hundreds of millions of dollars per month, and since has become a cultural phenomenon.")
            .setColor(3093219)
            .setThumbnail('http://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg')
            .setTitle("Game Info: Fortnite")
            .setFooter("“It’s a chaotic and fun system that makes fights a little more complicated. We rate the Battle Royale mode a 9.6 out of 10, while we rate the Save The World mode an absolute 6.5 out of 10. -IGN")
            message.channel.sendEmbed(gameInfo);
        }

        if(args == "Fortnite")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build, Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing, and Fortnite Creative, where players are given complete freedom to create worlds and battle arenas. The first two game modes were released in 2017 as early access titles and Creative was released on December 6, 2018. Save the World is available only for Windows, macOS, PlayStation 4, and Xbox One, while Battle Royale has been released for those platforms in addition for Nintendo Switch, iOS and Android devices. While the first two games have been successful for Epic Games, Fortnite Battle Royale became a resounding success, drawing in more than 125 million players in less than a year and earning hundreds of millions of dollars per month, and since has become a cultural phenomenon.")
            .setColor(3093219)
            .setThumbnail('http://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg')
            .setTitle("Game Info: Fortnite")
            .setFooter("“It’s a chaotic and fun system that makes fights a little more complicated. We rate the Battle Royale mode a 9.6 out of 10, while we rate the Save The World mode an absolute 6.5 out of 10. -IGN")
            message.channel.sendEmbed(gameInfo);
        }

        if(args == "roblox")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("Roblox is a massively multiplayer online and game creation system platform that allows users to design their own games and play a wide variety of different types of games created by other users. The platform hosts social network games constructed of Lego-like virtual blocks.As of September 2018, Roblox has over 70 million monthly active users.")
            .setColor(14634573)
            .setThumbnail('https://lh3.googleusercontent.com/uo9ar7Mbx5OOPloE2VQhVgyf5JE2fQnJU0lvUOpt2AjX9TSWFnXdWaFlOD00-zMzS04=w300')
            .setTitle("Game Info: Roblox")
            .setFooter("“ROBLOX is a very educational game and inspires kids to learn. We give out Roblox as 8/10. -CommonSenseMedia")
            message.channel.sendEmbed(gameInfo);
        }

        if(args == "Roblox")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("Roblox is a massively multiplayer online and game creation system platform that allows users to design their own games and play a wide variety of different types of games created by other users. The platform hosts social network games constructed of Lego-like virtual blocks.As of September 2018, Roblox has over 70 million monthly active users.")
            .setColor(14634573)
            .setThumbnail('https://lh3.googleusercontent.com/uo9ar7Mbx5OOPloE2VQhVgyf5JE2fQnJU0lvUOpt2AjX9TSWFnXdWaFlOD00-zMzS04=w300')
            .setTitle("Game Info: Roblox")
            .setFooter("“ROBLOX is a very educational game and inspires kids to learn. We give out Roblox as 8/10. -CommonSenseMedia")
            message.channel.sendEmbed(gameInfo);
        }

        if(args == "osu")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("osu! is a free and open-source rhythm game developed and published by Australian-based company PPY Developments PTY, created by Dean Herbert (also known as peppy or ppy). Originally released for Microsoft Windows on September 16, 2007, the game has also been ported to macOS (this version might be unstable), and Windows Phone. Its gameplay is based on titles including Osu! Tatakae! Ouendan, Elite Beat Agents, Taiko no Tatsujin, Beatmania IIDX, O2Jam, and DJMax. There are four official gamemodes: osu!standard, osu!mania, osu!catch, and osu!taiko. In the main game mode of osu!, other gameplay modes and mods add additional gameplay features or change the difficulty. (e.g. Double Time, Hidden, Flashlight, Hard Rock)The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. These hit circles have other forms, such as sliders and spinners which are interacted with in similar ways. These different gameplay mechanics are part of a beatmap. Beatmaps are a combination of a song, button layout as well as themes or cosmetic skins to make each beatmap unique. These are created by other users and typically feature varying difficulties. Players can play osu! using various peripherals, such as computer mouse, graphic tablet, keyboard, and touchscreen device. osu! also includes a ranking system for users to compete against one another, this creates a competitive environment where people compete to have their rankings displayed on the official leaderboards. Players can also play casually with friends or other users in a friendly competition, where all players play the same beatmap at the same time. As of 2018, there have been 8 osu! World Cups, which are 4v4 tournaments between players from countries around the world. The victors win prizes such as cash, special benefits, and osu! supporter, which is a subscription based service that provides special benefits for the player.")
            .setColor(13526703)
            .setThumbnail('https://is2-ssl.mzstatic.com/image/thumb/Purple3/v4/cd/ca/a8/cdcaa869-1c03-cf39-c0bf-20b455e864f0/mzl.alceykhf.png/246x0w.jpg')
            .setTitle("Game Info: osu!")
            .setFooter("“The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. We rate osu! a 7.9 out of 10. -IGN")
            message.channel.sendEmbed(gameInfo);
        }

        if(args == "osu!")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("osu! is a free and open-source rhythm game developed and published by Australian-based company PPY Developments PTY, created by Dean Herbert (also known as peppy or ppy). Originally released for Microsoft Windows on September 16, 2007, the game has also been ported to macOS (this version might be unstable), and Windows Phone. Its gameplay is based on titles including Osu! Tatakae! Ouendan, Elite Beat Agents, Taiko no Tatsujin, Beatmania IIDX, O2Jam, and DJMax. There are four official gamemodes: osu!standard, osu!mania, osu!catch, and osu!taiko. In the main game mode of osu!, other gameplay modes and mods add additional gameplay features or change the difficulty. (e.g. Double Time, Hidden, Flashlight, Hard Rock)The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. These hit circles have other forms, such as sliders and spinners which are interacted with in similar ways. These different gameplay mechanics are part of a beatmap. Beatmaps are a combination of a song, button layout as well as themes or cosmetic skins to make each beatmap unique. These are created by other users and typically feature varying difficulties. Players can play osu! using various peripherals, such as computer mouse, graphic tablet, keyboard, and touchscreen device. osu! also includes a ranking system for users to compete against one another, this creates a competitive environment where people compete to have their rankings displayed on the official leaderboards. Players can also play casually with friends or other users in a friendly competition, where all players play the same beatmap at the same time. As of 2018, there have been 8 osu! World Cups, which are 4v4 tournaments between players from countries around the world. The victors win prizes such as cash, special benefits, and osu! supporter, which is a subscription based service that provides special benefits for the player.")
            .setColor(13526703)
            .setThumbnail('https://is2-ssl.mzstatic.com/image/thumb/Purple3/v4/cd/ca/a8/cdcaa869-1c03-cf39-c0bf-20b455e864f0/mzl.alceykhf.png/246x0w.jpg')
            .setTitle("Game Info: osu!")
            .setFooter("“The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. We rate osu! a 7.9 out of 10. -IGN")
            message.channel.sendEmbed(gameInfo);
        }

        if(args == "Osu")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("osu! is a free and open-source rhythm game developed and published by Australian-based company PPY Developments PTY, created by Dean Herbert (also known as peppy or ppy). Originally released for Microsoft Windows on September 16, 2007, the game has also been ported to macOS (this version might be unstable), and Windows Phone. Its gameplay is based on titles including Osu! Tatakae! Ouendan, Elite Beat Agents, Taiko no Tatsujin, Beatmania IIDX, O2Jam, and DJMax. There are four official gamemodes: osu!standard, osu!mania, osu!catch, and osu!taiko. In the main game mode of osu!, other gameplay modes and mods add additional gameplay features or change the difficulty. (e.g. Double Time, Hidden, Flashlight, Hard Rock)The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. These hit circles have other forms, such as sliders and spinners which are interacted with in similar ways. These different gameplay mechanics are part of a beatmap. Beatmaps are a combination of a song, button layout as well as themes or cosmetic skins to make each beatmap unique. These are created by other users and typically feature varying difficulties. Players can play osu! using various peripherals, such as computer mouse, graphic tablet, keyboard, and touchscreen device. osu! also includes a ranking system for users to compete against one another, this creates a competitive environment where people compete to have their rankings displayed on the official leaderboards. Players can also play casually with friends or other users in a friendly competition, where all players play the same beatmap at the same time. As of 2018, there have been 8 osu! World Cups, which are 4v4 tournaments between players from countries around the world. The victors win prizes such as cash, special benefits, and osu! supporter, which is a subscription based service that provides special benefits for the player.")
            .setColor(13526703)
            .setThumbnail('https://is2-ssl.mzstatic.com/image/thumb/Purple3/v4/cd/ca/a8/cdcaa869-1c03-cf39-c0bf-20b455e864f0/mzl.alceykhf.png/246x0w.jpg')
            .setTitle("Game Info: osu!")
            .setFooter("“The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. We rate osu! a 7.9 out of 10. -IGN")
            message.channel.sendEmbed(gameInfo);
        }

        if(args == "Osu!")
        {
            var gameInfo = new discord.RichEmbed()
            .setDescription("osu! is a free and open-source rhythm game developed and published by Australian-based company PPY Developments PTY, created by Dean Herbert (also known as peppy or ppy). Originally released for Microsoft Windows on September 16, 2007, the game has also been ported to macOS (this version might be unstable), and Windows Phone. Its gameplay is based on titles including Osu! Tatakae! Ouendan, Elite Beat Agents, Taiko no Tatsujin, Beatmania IIDX, O2Jam, and DJMax. There are four official gamemodes: osu!standard, osu!mania, osu!catch, and osu!taiko. In the main game mode of osu!, other gameplay modes and mods add additional gameplay features or change the difficulty. (e.g. Double Time, Hidden, Flashlight, Hard Rock)The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. These hit circles have other forms, such as sliders and spinners which are interacted with in similar ways. These different gameplay mechanics are part of a beatmap. Beatmaps are a combination of a song, button layout as well as themes or cosmetic skins to make each beatmap unique. These are created by other users and typically feature varying difficulties. Players can play osu! using various peripherals, such as computer mouse, graphic tablet, keyboard, and touchscreen device. osu! also includes a ranking system for users to compete against one another, this creates a competitive environment where people compete to have their rankings displayed on the official leaderboards. Players can also play casually with friends or other users in a friendly competition, where all players play the same beatmap at the same time. As of 2018, there have been 8 osu! World Cups, which are 4v4 tournaments between players from countries around the world. The victors win prizes such as cash, special benefits, and osu! supporter, which is a subscription based service that provides special benefits for the player.")
            .setColor(13526703)
            .setThumbnail('https://is2-ssl.mzstatic.com/image/thumb/Purple3/v4/cd/ca/a8/cdcaa869-1c03-cf39-c0bf-20b455e864f0/mzl.alceykhf.png/246x0w.jpg')
            .setTitle("Game Info: osu!")
            .setFooter("“The primary emphasis of gameplay is to adapt and react to stimuli in the form of clicking or tapping on hit circles, which requires good eye–hand coordination. We rate osu! a 7.9 out of 10. -IGN")
            message.channel.sendEmbed(gameInfo);
        }
            }

        else
        {
            message.reply("You must type in the game you want to view the info of!")
        }
    }
}

module.exports = BotInfoCommand;