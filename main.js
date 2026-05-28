import fs from 'fs';
import dotenv from 'dotenv';

import {
    Client,
    Collection,
    GatewayIntentBits,
    ActivityType
} from 'discord.js';

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages
    ]
});

client.commands = new Collection();

// ================= LOAD COMMANDS =================
const commandFiles = fs
    .readdirSync('./commands')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = await import(`./commands/${file}`);

    client.commands.set(
        command.default.data.name,
        command.default
    );
}

// ================= LOAD EVENTS =================
const eventFiles = fs
    .readdirSync('./events')
    .filter(file => file.endsWith('.js'));

for (const file of eventFiles) {

    const event = await import(`./events/${file}`);

    client.on(
        event.default.name,
        (...args) => event.default.execute(...args)
    );
}

// ================= READY =================
client.once('ready', () => {

    console.log(`✅ Bot online sebagai ${client.user.tag}`);

    client.user.setActivity('/help | verifgender.xyz', {
        type: ActivityType.Watching
    });
});

// ================= LOGIN =================
client.login(process.env.TOKEN);