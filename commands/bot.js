module.exports = {
  name: 'bot',
  desciption: 'certain bot functions',
  execute(message, args){
    message.channel.send(`${args}`)
  }
};