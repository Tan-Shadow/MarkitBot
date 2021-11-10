const {MessageEmbed} = require("discord.js") 

module.exports = async (client,newMember) => {
	if (newMember.bot) return
	const welcomeEmbed = new MessageEmbed()
		.setColor("RANDOM")
		.setTitle(`Hey there **${newMember.user.username}**`)   
		.setDescription("**Welcome to MarkitUpX discord server**! \n\nTo get started, make sure you join our **newbie meetup** in <#855328798040260658> at 9 pm IST and give yourself a quick introduction. we'd love to have you there. \n\nThanks so much and enjoy your stay!")
	newMember.send({embeds: [welcomeEmbed]})
	newMember.send("> Click <#855328798040260658> to join it quickly!\n\n> Also don't forget to react and take your roles from <#854943831043342376>")
}
