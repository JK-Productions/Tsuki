module.exports = {
  name: 'bot',
  desciption: 'certain bot functions',
  announce: (message, args) => {
    message.channel.send(`${args}`)
  }
};