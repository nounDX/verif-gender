export default {
    name: 'interactionCreate',

    async execute(interaction) {

        if (!interaction.isButton()) return;

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

            // KASIH ROLE
            await interaction.member.roles.add(girl);

            // EDIT PESAN SETELAH DIPENCET
            return interaction.update({
                content: '✅ Kamu mendapatkan role GIRL.',
                embeds: [],
                components: []
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

            // KASIH ROLE
            await interaction.member.roles.add(boy);

            // EDIT PESAN SETELAH DIPENCET
            return interaction.update({
                content: '✅ Kamu mendapatkan role BOY.',
                embeds: [],
                components: []
            });
        }
    }
};