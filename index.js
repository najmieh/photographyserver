const Discord = require("discord.js");
const token = process.env.BOT_TOKEN ;
const mybot = new Discord.Client();
const prefix = "!!";
//var roles = message.channel.server.roles;


//var roleName = message.content.split(" ");
mybot.on('ready', () => {
    console.log(' hey najmieh I am ready!!');
});

mybot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + "Hey wlcome here, please choose your role via this command> !!, you can take look at our roles in the welcome channel. if you have any question ask maier and von. thanks :)");
});

mybot.on('message', message => {
    if (message.author.mybot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(command);


    switch (command) {
        case 'pro':
            message.member.addRole(message.member.guild.roles.find("name", "pro"));
            message.channel.sendMessage("you've been tagged with pro!").catch(console.error);
            break;
        case 'semipro':
            message.member.addRole(message.member.guild.roles.find("name", "semipro"));
            message.channel.sendMessage("you've been tagged with semi-pro!").catch(console.error);
            break;
        case 'studentofphotography':
            message.member.addRole(message.member.guild.roles.find("name", "studentofphotography"));
            message.channel.sendMessage("you've been tagged with studentOfPhotography!").catch(console.error);
            break;
        case 'hobbyist':
            message.member.addRole(message.member.guild.roles.find("name", "hobbyist"));
            message.channel.sendMessage("you've been tagged with Hobbyist!").catch(console.error);
            break;
        case 'novice':
            message.member.addRole(message.member.guild.roles.find("name", "novice"));
            message.channel.sendMessage("you've been tagged with Novice!").catch(console.error);
            break;
        case 'interested':
            message.member.addRole(message.member.guild.roles.find("name", "interested"));
            message.channel.sendMessage("you've been tagged with interested!").catch(console.error);
            break;
        case 'canonuser':
            message.member.addRole(message.member.guild.roles.find("name", "canonuser"));
            message.channel.sendMessage("you've been tagged with canonUser!").catch(console.error);
            break;
        case 'nikonuser':
            message.member.addRole(message.member.guild.roles.find("name", "nikonuser"));
            message.channel.sendMessage("you've been tagged with NikonUser!").catch(console.error);
            break;
        case 'goprouser':
            message.member.addRole(message.member.guild.roles.find("name", "goprouser"));
            message.channel.sendMessage("you've been tagged with GoProUser!").catch(console.error);
            break;
        case 'Kodakuser':
            message.member.addRole(message.member.guild.roles.find("name", "Kodakuser"));
            message.channel.sendMessage("you've been tagged with KodakUser!").catch(console.error);
            break;
        case 'Fujifilmuser':
            message.member.addRole(message.member.guild.roles.find("name", "Fujifilmuser"));
            message.channel.sendMessage("you've been tagged with FujifilmUser!").catch(console.error);
            break;
        case 'Phaseoneuser':
            message.member.addRole(message.member.guild.roles.find("name", "PhaseOneUser"));
            message.channel.sendMessage("you've been tagged with PhaseOneUser!").catch(console.error);
            break;
        case 'iphonegraphy':
            message.member.addRole(message.member.guild.roles.find("name", "iphonegraphy"));
            message.channel.sendMessage("you've been tagged with Iphonegraphy!").catch(console.error);
            break;
        case 'samaunggraphy':
            message.member.addRole(message.member.guild.roles.find("name", "samaunggraphy"));
            message.channel.sendMessage("you've been tagged with SamaungGraphyy!").catch(console.error);
            break;
        case 'mobilegraphy':
            message.member.addRole(message.member.guild.roles.find("name", "mobilegraphy"));
            message.channel.sendMessage("you've been tagged with mobileGraphy!").catch(console.error);
            break;

        case 'asian':
            message.member.addRole(message.member.guild.roles.find("name", "asian"));
            message.channel.sendMessage("you've been tagged with Asian!").catch(console.error);
            break;
        case 'european':
            message.member.addRole(message.member.guild.roles.find("name", "european"));
            message.channel.sendMessage("you've been tagged with european!").catch(console.error);
            break;
        case 'northamerican':
            message.member.addRole(message.member.guild.roles.find("name", "northamerican"));
            message.channel.sendMessage("you've been tagged with North american!").catch(console.error);
            break;
        case 'southamerican':
            message.member.addRole(message.member.guild.roles.find("name", "southamerican"));
            message.channel.sendMessage("you've been tagged with south-american!").catch(console.error);
            break;
        case 'australian':
            message.member.addRole(message.member.guild.roles.find("name", "australian"));
            message.channel.sendMessage("you've been tagged with australian!").catch(console.error);
            break;


        default:
            message.reply("You pleb, we don't have this command :(").catch(console.error);
            break;
    }

});


//   if (command === 'ping') {
//     message.channel.sendMessage('pong');

//}

// if (command === "foo") {
//   let modRole = message.guild.roles.find("name", "naji");
// if (message.member.roles.has(modRole.id)) {
//   message.member.addRole(message.member.guild.roles.find("name", "poo"));
// message.channel.sendMessage("you've been tagged with foo!").catch(console.error);
// }

//} else {
//  message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
//}

// if (command == 'say') {
//   const saymessage = args.join("");
// message.delete().catch(O_o => {});
//message.channel.sendMessage("yohooo");

//}




//});
mybot.login(process.env.BOT_TOKEN);
