import { Client, ClientOptions, Intents } from "discord.js";
require("dotenv").config();
//Import the listeners so that they can be instanciated below (TODO: Create an Event Handler)
import interactionCreate from './listeners/interactionCreate';
import ready from "./listeners/ready";

console.log("Bot is starting...");

//Enables the required intents for the bot.
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
});

//Loading/instanciating the events so that they can be emitted once triggered.
ready(client);
interactionCreate(client);

//Finally login to the bot using its token.
client.login(process.env.CLIENT_TOKEN);