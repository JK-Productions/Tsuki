module.exports = {
  name: 'print',
  desciption: 'make bot say something',
  execute(message, args){
    message.channel.send(`${args}`)
  }
};