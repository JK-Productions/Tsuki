const fs = require('fs'); // Used to Dynamically Access Files
const Discord = require("discord.js"); // Discord's API
const {prefix} = require("./config.json"); // Config File, Customizable Stuff

const client = new Discord.Client(); // Access client using Discord API
client.commands = new Discord.Collection(); // Used to setup commands

const botFiles = fs.readdirSync('./commands/bot').filter(file => file.endsWith('.js')); // Get Commands from ./commands/bot
const managementFiles = fs.readdirSync('./commands/management').filter(file => file.endsWith('.js')); // Get Commands from ./commands/management
const moneyFiles = fs.readdirSync('./commands/money').filter(file => file.endsWith('.js')); // Get Commands from ./commands/money
const musicFiles = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js')); // Get Commands from ./commands/music
const otherFiles = fs.readdirSync('./commands/other').filter(file => file.endsWith('.js')); // Get Commands from ./commands/other

// Setting Commands
for (const file of botFiles) {
	const command = require(`./commands/bot/${file}`);
	client.commands.set(command.name, command);
}
for (const file of managementFiles) {
	const command = require(`./commands/management/${file}`);
	client.commands.set(command.name, command);
}
for (const file of moneyFiles) {
	const command = require(`./commands/money/${file}`);
	client.commands.set(command.name, command);
}
for (const file of musicFiles) {
	const command = require(`./commands/music/${file}`);
	client.commands.set(command.name, command);
}
for (const file of otherFiles) {
	const command = require(`./commands/other/${file}`);
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