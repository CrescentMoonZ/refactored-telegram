const commando = require('discord.js-commando');
const Discord = require('discord.js');

class QuizCommand extends commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: 'quiz',
            group: 'fun',
            memberName: 'quiz',
            description: `You'll be asked a question, and you'll have to type in the answer!`
        });
    }

async run(message)
    {

        let quiz = [
            {q: 'Name a coding language.', a: ['javascript', 'python', 'java', 'ruby', 'php', 'c++', 'css', 'c#', "go", "c", "typescript", "swift"] },
            {q: 'Name a popular soda brand.', a: ['coca cola', 'pepsi', '7up', 'crush', 'fanta', 'mountain dew', 'sprite', 'dr pepper'] },
            {q: 'Name a phone company.', a: ['samsung', 'apple', 'huawei', 'nokia', 'sony', 'lg', 'htc', 'motorola', 'asus', 'blackberry', 'dell', 'uniwa'] },
            {q: 'Name the currency used in Japan.', a: ['yen', '¥']},
            {q: 'Name a chocolate brand.', a: ['ferrero rocher', 'lindt & sprungli', 'ghirardelli', "hershey's", 'toblerone', 'cadbury', 'guylian', 'patchi', 'godiva', 'nestle', 'nestlé', 'mars', 'milka', 'theo', 'taza', "green & black's", 'meltykiss', 'lotte', 'meiji', 'morinaga', 'ezaki glico', 'fujiya']},
            {q: 'Mozzarella cheese is made from the milk of which animal?', a: ['buffalo']},
            {q: "Which continent is the largest?", a: ['Asia', 'asia']},
            {q: "What is PROJECT_FUN's basic prefix?", a: ['f!', 'F!']}
        ];

        let options = {
            max: 1,
            time: 30050,
            errors: ['time'],
        };

        let item = quiz[Math.floor(Math.random() * quiz.length)];
        await message.channel.sendMessage(item.q);

        try {
            let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
            let winnerMessage = collected.first();
            return message.channel.sendMessage({embed: new Discord.RichEmbed()
                                                            .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                                        .setTitle(`Correct answer: \`${winnerMessage.content}\``)
                                                    .setFooter(`Question: ${item.q}`)
                                                .setColor('RANDOM')
                                            })
        } catch (_) {
            return message.channel.sendMessage({embed: new Discord.RichEmbed()
                                                        .setAuthor('No one got the answer in time!')
                                                    .setTitle(`Correct answer(s): \`${item.a}\``)
                                                .setFooter(`Question: ${item.q}`)
                                            })
        }

    }
}
module.exports = QuizCommand;