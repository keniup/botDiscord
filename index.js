const auth = require("./auth.json");
const discord = require("discord.js");

const bot = new discord.Client();

const day = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const month = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre",, "Novembre", "Decembre"];

bot.on("ready", () => {
    console.log("I'm here");
})

bot.on("guildMemberAdd", member => {
    member.createDM().then(chanel => {
        return chanel.send("Welcome to the discord " + member.displayName);
    })
})

bot.on("message", message => {

    date = new Date();

    if(message.content[0] == '!')
    {
        cmd = message.content.substring(1);
        switch(cmd)
        {
            case 'help':
                message.reply("Voici les commandes :\n !time\n!StartStream\n!blabla\n!date");
                break;
            case 'blabla':
                message.reply("Tu as envie de parler ?");
                break;
            case 'StartStream':
                message.reply("Horraire de stream tout les jours à partir de 19h");
                break;
            case "time":
                message.reply("Heure actuel : " + date.getHours() + ":" + date.getMinutes());
                break;
            case "date":
                message.reply("nous sommes le : " + day[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()]);
                break;
            default:
                message.reply("La commande !"+cmd+" n'existe pas, veuillez taper !help pour voir la liste des commandes");
                break;
        }
    }
})


bot.login(process.env.TOKEN);