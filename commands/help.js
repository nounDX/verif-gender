import {
    SlashCommandBuilder,
    EmbedBuilder
} from 'discord.js';

export default {

    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Bantuan bot'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle('📖 HELP COMMAND')
            .setDescription('Daftar command bot.')
            .addFields(
                {
                    name: '/verify',
                    value: 'Panel verifikasi role'
                },
                {
                    name: '/premium',
                    value: 'Panel premium script'
                },
                {
                    name: '/help',
                    value: 'Melihat bantuan command'
                }
            )
            .setColor('Blue');

        await interaction.reply({
            embeds: [embed]
        });
    }
};