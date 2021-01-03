module.exports = {
  name: 'play',
  desciption: 'play music',
  execute(message, args){
    message.channel.send(`Now Playing ${args}`)
  }
};