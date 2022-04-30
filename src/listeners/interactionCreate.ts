import { BaseCommandInteraction, Client, Interaction, MessageEmbed } from "discord.js";
import Commands from "../Commands";
import DebugLogger from "../utils/debug";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenu()) {
            await handleSlashCommand(client, interaction);
            new DebugLogger().log(process.env.NODE_ENV, "A command has just been executed!", [
                {
                    title: "Command",
                    description: interaction.commandName
                },
                {
                    title: "ChannelID",
                    description: interaction.channel?.id
                },
                {
                    title: "UserID",
                    description: interaction.user.id
                },
                {
                    title: "Timestamp",
                    description: interaction.createdAt
                }
            ]);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        interaction.followUp({ embeds: [new MessageEmbed().setTitle(":warning: An error has occured!").setColor("#cc3300")] });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
};