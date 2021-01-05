const ytdl = require('ytdl-core-discord');

module.exports = {
  name: 'play',
  desciption: 'play music',
  aliases: ['p','song'],
  usage: '[link]',
  async execute(message, args){
    // Join the same voice channel of the author of the message
    if(args.length === 0){
      return message.reply(`Please insert a link after`);
    }
    if (message.member.voice.channel) {
      try{
        const connection = await message.member.voice.channel.join();
        const link = args[0];
        // Create a dispatcher
        const dispatcher = connection.play(await ytdl(link), { type: 'opus' });
        dispatcher.on('finish', () => voiceChannel.leave());
        return message.reply(`Playing ${link}`);
      }
      catch(error){
        return message.reply(`Something is wrong with the link.`);
      }
    }
    return message.reply(`You're currently not in a voice channel.`);
  }
};