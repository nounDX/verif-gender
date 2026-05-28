export default {
    name: 'interactionCreate',

    async execute(interaction) {

        if (!interaction.isButton()) return;

        try {

            await interaction.deferReply({ ephemeral: true });

            // ================= GIRL =================
            if (interaction.customId === 'girl_verify') {

                const girl = interaction.guild.roles.cache.find(
                    r => r.name === 'GIRL'
                );

                if (!girl) {
                    return interaction.editReply('❌ Role GIRL belum ada.');
                }

                await interaction.member.roles.add(girl);

                return interaction.editReply('✅ Kamu mendapatkan role GIRL.');
            }

            // ================= BOY =================
            if (interaction.customId === 'boy_verify') {

                const boy = interaction.guild.roles.cache.find(
                    r => r.name === 'BOY'
                );

                if (!boy) {
                    return interaction.editReply('❌ Role BOY belum ada.');
                }

                await interaction.member.roles.add(boy);

                return interaction.editReply('✅ Kamu mendapatkan role BOY.');
            }

        } catch (error) {
            console.error(error);

            if (interaction.deferred || interaction.replied) {
                return interaction.editReply('❌ Terjadi error pada bot.');
            } else {
                return interaction.reply({
                    content: '❌ Terjadi error pada bot.',
                    ephemeral: true
                });
            }
        }
    }
};