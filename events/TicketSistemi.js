const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
const { kategori, yetkili } = require('../config.json');
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	
                
                
                
        let catégorie = kategori
        let roleStaff = interaction.guild.roles.cache.get(yetkili)

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
 

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: 'Zaten bir biletin açık!', ephemeral: true})
            if (interaction.values[0] == "2") {
                interaction.guild.channels.create(`ticket-${interaction.user}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const a = new MessageEmbed()
                    .setTitle('Başlık')
                    .setDescription('Açıklama')
                    .setFooter('Footer')
                    c.send({embeds: [a], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Biletini açtım! <#${c.id}>`, ephemeral: true})
                })
                
           
            } else if (interaction.values[0] == "1") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Başlık')
                    .setDescription("Açıklama")
                    .setFooter('FOOTER')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Biletini açtım <#${c.id}>`, ephemeral: true})
                })
                
            
                
            
            }
        }
    }
}