module.exports = {
  name: 'money',
  desciption: 'commands used to manage money',
  execute(message) {
    message.reply(`
      List of Commands For Money:
      1.daily - get daily
      2.bal - check balance
      3.send - send balance
    `);
  },
};