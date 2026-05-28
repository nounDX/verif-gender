import {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Panel verify'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle('✨ VERIFY MEMBER')
            .setDescription(
                'Klik tombol sesuai gender kamu.\n\n' +
                '👧 Girl = Unverified + Girl Real\n' +
                '👦 Boy = Boy'
            )
            .setColor('Purple');

        const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('girl_verify')
                    .setLabel('👧 GIRL')
                    .setStyle(ButtonStyle.Danger),

                new ButtonBuilder()
                    .setCustomId('boy_verify')
                    .setLabel('👦 BOY')
                    .setStyle(ButtonStyle.Primary)
            );

        await interaction.reply({
            embeds: [embed],
            components: [buttons]
        });
    }
};