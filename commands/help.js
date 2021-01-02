module.exports = {
  name: 'help',
  desciption: 'list of commands',
  execute(message) {
    message.reply(`
      List of Commands:
      1.help - What you are seeing now
      2.ping - Shows ping from command to bot
      3.ping [arg] - Pings User
      4.play [arg] - Plays Music
    `);
  },
};