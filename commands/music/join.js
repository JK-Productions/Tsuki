module.exports = {
  name: 'join',
	description: 'Join the voice channel you\'re currently in.',
	aliases: ['j','connect'],
  execute(message){
    // Join the same voice channel of the author of the message
    if (message.member.voice.channel) {
      return message.member.voice.channel.join();
    }
    return message.reply(`You're currently not in a voice channel.`);
  }
};