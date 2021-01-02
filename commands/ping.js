module.exports = {
  name: 'ping',
  desciption: 'pinging the bot to make sure it works',
  execute(message, args){
    if(args.length === 0){
      const timeTaken = Date.now() - message.createdTimestamp;
      message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
    else{
      var sender = message.author;
      message.channel.send(`${sender} Is Trying to Contact ${args}`)
    }
  },
};