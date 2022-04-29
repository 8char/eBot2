import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../Command";

export const Setup: Command = {
    name: "setup",
    description: "Sets up the neccessary channels.",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const embed = new MessageEmbed()
            .setTitle(":warning: Create the channel inside of a *text channel*!")
            .setColor("#cc3300")

        //Make sure that the command is being executed in a server channel so that the bot can setup the appropriate channels.
        if (!(interaction.channel?.type === "GUILD_TEXT")) return await interaction.followUp({ ephemeral: true, embeds: [ embed ] });
        
        embed.setColor("#00FF00").setTitle("Hety!")

        await interaction.followUp({
            ephemeral: true,
            embeds: [ embed ]
        });
    }
};