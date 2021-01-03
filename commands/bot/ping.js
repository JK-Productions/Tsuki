module.exports = {
  name: 'ping',
  desciption: 'pinging the bot to make sure it works',
  execute(message){
    if (!message.mentions.users.size) {
      const timeTaken = Date.now() - message.createdTimestamp;
      return message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
		}
		const userList = message.mentions.users.map(user => {
			return `${user}`;
    });
    const sender = message.author;
		message.channel.send(`${sender} Is Trying to Contact ${userList}`);
  },
};