module.exports = {
  name: 'send',
  desciption: 'send people money',
  execute(message, args){
    message.channel.send(`${args}`)
  }
};