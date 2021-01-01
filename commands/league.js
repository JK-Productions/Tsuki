module.exports = {
  name: 'league of legends',
  desciption: 'league of legends functions',
  profile: (message, args) => {
    message.channel.send(`profile of ${args}`)
  }
};