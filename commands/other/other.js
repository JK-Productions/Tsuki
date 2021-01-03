module.exports = {
  name: 'other',
  desciption: 'commands used to manage others',
  execute(message) {
    message.reply(`
      List of Commands For Other:
      1.lol - league of legends stats
      2.val - valorant stats
    `);
  },
};