module.exports = {
  name: 'league',
  desciption: 'league of legends functions',
  execute(message, args){
    message.channel.send(`profile of ${args}`)
  },
};