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
	const commandName = args.shift().toLowerCase();
	
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	// Check if the command exist
  if (!command){
    message.reply(`Do '~help for list of commands'`);
    return;
	};
	
	// Check to see if the command is a private message or a server message
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	// Check command permissions
	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.channel.reply('You can not do this!');
		}
	}

	// Check command args
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}
	
	// Run The Command
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
  
});

client.login(process.env.BOT_TOKEN);