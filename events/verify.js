export default {
    name: 'interactionCreate',

    async execute(interaction) {

        if (!interaction.isButton()) return;

        try {

            // ================= GIRL =================
            if (interaction.customId === 'girl_verify') {

                const girl = interaction.guild.roles.cache.find(
                    r => r.name === 'GIRL'
                );

                if (!girl) {
                    return interaction.reply({
                        content: '❌ Role GIRL belum ada.',
                        ephemeral: true
                    });
                }

                await interaction.member.roles.add(girl);

                return interaction.reply({
                    content: '✅ Kamu mendapatkan role GIRL.',
                    ephemeral: true
                });
            }

            // ================= BOY =================
            if (interaction.customId === 'boy_verify') {

                const boy = interaction.guild.roles.cache.find(
                    r => r.name === 'BOY'
                );

                if (!boy) {
                    return interaction.reply({
                        content: '❌ Role BOY belum ada.',
                        ephemeral: true
                    });
                }

                await interaction.member.roles.add(boy);

                return interaction.reply({
                    content: '✅ Kamu mendapatkan role BOY.',
                    ephemeral: true
                });
            }

        } catch (error) {
            console.error(error);

            if (!interaction.replied && !interaction.deferred) {
                return interaction.reply({
                    content: '❌ Terjadi error pada bot.',
                    ephemeral: true
                });
            }
        }
    }
};