module.exports = {
  name: 'music',
  desciption: 'commands used to manage music',
  execute(message) {
    message.reply(`
      List of Commands For Music:
      1.join - join voice channel
      2.play - plays music
    `);
  },
};