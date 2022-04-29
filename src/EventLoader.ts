import { Client } from "discord.js";
import fs from "fs";

export default (client: Client): void => {
    const eventFiles = fs.readdirSync(`${__dirname}/listeners/`)

    // Loading/instanciating the events so that they can be emitted once triggered.
    for (const file of eventFiles) {
        const eventName: string = file.split('.')[0]
        const event = require(`${__dirname}/listeners/${file}`);
        console.log(`📅 Loaded the event /${eventName}! ✅`)
        event.default(client); // Register the event!
    }
};