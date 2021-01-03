module.exports = {
  name: 'lol',
  desciption: 'league of legends functions',
  execute(message, args){
    message.channel.send(`profile of ${args}`)
  },
};