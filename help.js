const Discord = require("discord.js");
module.exports = {
	run: async (bot, message) => {
		var helpEmbed = new Discord.RichEmbed()
			.setTitle("Commands")
			.setColor("#abffa6")
			.setFooter(`Ran by ${message.author.tag}`);
		var categories = Array.from(new Set(bot.allcommands.map((m) => m.help.category)));
		for (let category of categories) {
			let specificCommands = bot.allcommands.filter((m) => m.help.category === category);
			helpEmbed.addField(category, `\`${specificCommands.map((m) => m.help.name).join(", ")}\``);
		}
		message.channel.send(helpEmbed).catch(() => bot.safeSend(message, module.exports.help.name)).catch(() => bot.safeSend(message, module.exports.help.name));
	},
	help : {
		name: "help",
		category: "Information"
	}
};
