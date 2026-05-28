import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const commands = [];

// AMBIL SEMUA COMMAND
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = await import(`./commands/${file}`);

    commands.push(command.default.data.toJSON());
}

// REST API
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {

    console.log('⏳ Sedang register slash command...');

    await rest.put(
        Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            process.env.GUILD_ID
        ),
        { body: commands }
    );

    console.log('✅ Slash command berhasil diregister.');

} catch (error) {

    console.error(error);

}