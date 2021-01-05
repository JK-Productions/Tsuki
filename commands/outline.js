const { prefix } = require('../config.json');

module.exports = {
	name: 'outline',
	description: 'Use this as an outline when creating new commands',
	aliases: ['outline','out'],
	usage: '[word]',
	execute(message, args) {
	  const data = [];
    const { commands } = message.client;

    if (!args.length) {
      data.push('Outline');

      return message.channel.send(data, { split: true })
    }

		data.push(`You just did ${prefix}outline ${args}`);

		message.channel.send(data, { split: true });
	},
};