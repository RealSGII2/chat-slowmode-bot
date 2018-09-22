const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
});

client.on('message', message => {
  if (message.content === 'start') {
    client.api.channels(489584994118008852).patch({ data: { rate_limit_per_user: 10 } })
  }
});

client.login(process.env.token);
