import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";

//A simple type whichs allows for typechecking on commands allowing for a run function aswell as discord.js's normal ChatInputApplicationCommandData type.
export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}