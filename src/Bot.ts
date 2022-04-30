import { Client, Intents } from "discord.js";
require("dotenv").config();
import eventLoader from "./EventLoader";

console.log("⌛ Bot is starting...");
if (!process.env.CLIENT_TOKEN) {
    console.error("❌ You don't have a token set up, please do so in the .env file!");
    process.exit();
}
if(!process.env.NODE_ENV) {
    console.warn("⚠️ We recommend that you run the bot using the predetermined yarn scripts, you may run in to issues if you don't!")
    process.env.NODE_ENV = "NONE";
}
console.log(`🐛 Debug level: ${process.env.NODE_ENV.toLocaleUpperCase()}`)

//Enables the required intents for the bot.
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
});

eventLoader(client);


//Finally login to the bot using its token.
client.login(process.env.CLIENT_TOKEN);