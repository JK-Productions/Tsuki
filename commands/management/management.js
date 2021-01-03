module.exports = {
  name: 'management',
  desciption: 'commands used to manage the server',
  execute(message) {
    message.reply(`
      List of Commands For Management:
      1.kick - kick person
      2.print - make the bot say something
      3.prune - get rid of messages
    `);
  },
};