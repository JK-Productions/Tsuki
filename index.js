const Discord = require("discord.js");
const client = new Discord.Client();

// Commands
const help = require('./commands/help');
const ping = require('./commands/ping');
const music = require('./commands/music');
const league = require('./commands/league');
const bot = require('./commands/bot');

const prefix = "~";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// https://discord.js.org/#/docs/main/stable/general/welcome
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "help"){
    help.help(message);
  }
  else if (command === "ping") {
    if(args.length === 0){
      ping.ping(message);
    }
    else{
      ping.pingUser(message, args);
    }
  }
  else if (command === "play") {
    music.play(message, args);
  }
  else if (command === "lol"){
    league.profile(message, args);
  }
  else if (command === "annouce"){
    bot.announce(message, args);
  }
  else{
    message.reply(`Do '~help for list of commands'`);
  }
});

try {
  client.login(process.env.BOT_TOKEN);
  console.log("Bot is Online and Working");
} catch (error) {
  console.log("Error Connecting With Bot: Problem With Token. Error Below.");
  console.log(error);
}