import { Command } from "./Command";
const fs = require("node:fs");

const Commands: Command[] = [];
const commandFiles = fs.readdirSync(`${__dirname}/commands/`)

// Command loader, will itterate through all of the command files located in ./commands and then load them to a variable and then export that.
for (const file of commandFiles) {
    const commandName: string = file.split('.')[0]
    const command: Command = require(`${__dirname}/commands/${file}`)[commandName];
    console.log(`📅 Loaded the command /${commandName}! ✅`)
	Commands.push(command);
}

export default Commands;