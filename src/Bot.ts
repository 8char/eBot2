import { Client, Intents } from "discord.js";
require("dotenv").config();
import eventLoader from "./EventLoader";

console.log("⌛ Bot is starting...");
console.log(`🐛 Debug level: ${process.env.NODE_ENV?.toLocaleUpperCase() || "NONE"}`)

//Enables the required intents for the bot.
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
});

eventLoader(client);


//Finally login to the bot using its token.
client.login(process.env.CLIENT_TOKEN);