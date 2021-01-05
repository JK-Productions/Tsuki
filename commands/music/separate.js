module.exports = {
  name: 'leave',
	description: 'Bot disconnects from voice channel',
	aliases: ['separate','disconnect'],
  execute(message){
    if(message.guild.voice && message.guild.voice.connection){
      const voiceChannel = message.guild.voice.connection;
      return voiceChannel.disconnect();
    }
    return message.reply(`The Bot Is Currently Not In A Voice Channel`);
  }
};