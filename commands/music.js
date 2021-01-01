module.exports = {
  name: 'music',
  desciption: 'music functions',
  play: (message,args) => {
    message.channel.send(`playing ${args}`)
  }
};