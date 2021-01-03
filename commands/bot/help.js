module.exports = {
  name: 'help',
  desciption: 'list of commands',
  execute(message) {
    message.reply(`
      List of Commands:
      1.bot - show bot commands
      2.management - show management commands
      3.money - show money commands
      4.music - show music commands
      5.others - show other commands
    `);
  },
};