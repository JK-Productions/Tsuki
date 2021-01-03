module.exports = {
  name: 'val',
  desciption: 'valorant functions',
  execute(message, args){
    message.channel.send(`profile of ${args}`)
  },
};