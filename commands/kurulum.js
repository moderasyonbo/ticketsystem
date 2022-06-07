const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Bilet türünü seç!')
					.addOptions([
						{
							label: 'İsim',
							description: 'açıklama',
							value: '1',
						},
					
                        {
							label: 'İsim',
							description: 'Açıklama',
							value: '2',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Nova Bilet Sistemi',
                description: 'Menüden Ticket Aç!',
                color: "RED",
                footer: {text: 'Nova'}
            }],
            components: [row]
        })
    }
}
