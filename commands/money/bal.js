module.exports = {
  name: 'bal',
  desciption: 'get current balance',
  execute(message, args){
    message.channel.send(`${args}`)
  }
};