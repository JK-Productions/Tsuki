module.exports = {
  name: 'music',
  desciption: 'music functions',
  execute(message, args){
    message.channel.send(`playing ${args}`)
  }
};