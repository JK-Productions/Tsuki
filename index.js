const fs = require('fs'); // Used to Dynamically Access Files
const Discord = require("discord.js"); // Discord's API
const {prefix} = require("./config.json"); // Config File, Customizable Stuff

const client = new Discord.Client(); // Access client using Discord API
client.commands = new Discord.Collection(); // Used to setup commands

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Get Commands from ./commands

// Setting Commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// https://discord.js.org/#/docs/main/stable/general/welcome
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (!client.commands.has(command)){
    message.reply(`Do '~help for list of commands'`);
    return;
  };

  try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
  }
  
});

client.login(process.env.BOT_TOKEN);