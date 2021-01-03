module.exports = {
  name: 'daily',
  desciption: 'get daily',
  execute(message, args){
    message.channel.send(`${args}`)
  }
};