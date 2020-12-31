module.exports = {
  name: 'ping',
  desciption: 'pinging the bot to make sure it works',
  ping: (message) =>  {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  },
  pingUser: (message,args) => {
    var sender = message.author;
    message.channel.send(`${sender} Is Trying to Contact ${args}`)
  }
};