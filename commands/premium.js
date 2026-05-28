import {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('premium')
        .setDescription('Panel premium'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle('🛒 PREMIUM SCRIPT')
            .setDescription(
                'Untuk semua informasi premium script sudah ada di atas.\n' +
                'Jika ingin membuat ticket silakan pilih tombol di bawah.'
            )
            .setColor('White')
            .setFooter({
                text: 'powered by VERIF GENDER'
            });

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('LEXSHUB')
                    .setStyle(ButtonStyle.Secondary)
                    .setURL('https://google.com'),

                new ButtonBuilder()
                    .setLabel('VOLTRA')
                    .setStyle(ButtonStyle.Secondary)
                    .setURL('https://google.com'),

                new ButtonBuilder()
                    .setLabel('TRIXHUB')
                    .setStyle(ButtonStyle.Secondary)
                    .setURL('https://google.com')
            );

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};