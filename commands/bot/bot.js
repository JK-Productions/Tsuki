module.exports = {
  name: 'bot',
  desciption: 'print out bot commands',
  execute(message) {
    message.reply(`
      List of Commands For Bot:
      1.avatar - get avatar
      2.ping - ping
      3.server - server info
      4.user-info - user info
    `);
  },
};