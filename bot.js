const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = ";";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    const m = await msg.channel.send("Pinging...");
    m.edit(`Pong!` Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  if (command === 'hi' || command === 'hello') {
    msg.reply('bye!');
  }
  if (command === 'say' || command === 'send') {
    const allowid = [0];
    const sayMessage = args.join(" ");
    msg.channel.send(sayMessage);
  }
  
  if(command === 'purge' || command === 'clean' || command === 'clear') {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
      return msg.reply("please provide a number between 2 and 10,000 for the number of messages to delete!");
    
    const fetched = await msg.channel.fetchMessages({limit: deleteCount});
    msg.channel.bulkDelete(fetched)
      .catch(error => msg.reply(`Couldn't delete messages because of: ${error}`));
  }
  
  if (command === 'help' || command === 'commands') {
    msg.reply("In development!")
  }
  
  if (command === 'slowmode') {
    const time = args.shift()
    const reason = args.join(" ");
    msg.reply(`the limit has been set to ${time} seconds because of ${reason}.`);
    msg.channel.setRateLimitPerUser(time, reason);
  }
});

client.login(process.env.BOT_T0KEN);
