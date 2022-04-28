import { Client, ClientOptions, Intents } from "discord.js";
import interactionCreate from './listeners/interactionCreate';
import ready from "./listeners/ready";
require("dotenv").config();

console.log("Bot is starting...");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
});

ready(client);
interactionCreate(client);

client.login(process.env.CLIENT_TOKEN);