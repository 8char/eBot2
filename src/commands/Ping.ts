import { BaseCommandInteraction, Client, ColorResolvable, MessageEmbed } from "discord.js";
import { Command } from "../Command";

// A recursive function which will compare the value provided against a set of ranges which will then return an item from an array in that certain spot compared to what range it is in.
const recursiveRangeSymbol = (checkValue: number, difference: number, symbols: any[], step: number=1): any => {
    if (checkValue<=0)
        return symbols[0];
    if (checkValue>=difference*symbols.length)
        return symbols[symbols.length-1];
    if (checkValue<=difference*step)
        return symbols[step-1];

    return recursiveRangeSymbol(checkValue, difference, symbols, step+1)
}

export const Ping: Command = {
    name: "ping",
    description: "Replies with pong!",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const latency: number = Date.now() - interaction.createdTimestamp;
        const apiLatency: number = Math.round(client.ws.ping);
        const embedColor: ColorResolvable = recursiveRangeSymbol(latency + apiLatency, 500, ["#32CD32", "#FFA500", "#fc3517"]);

        const embed = new MessageEmbed()
            .setColor(embedColor)
            .setTitle("__***🏓 Pong! Here's some latency stats:***__")
            .setDescription("*Please contact us (Atlas#6666) if you're experiencing latency issues and we will sort it as soon as possible.*")
            .setFields([
            {
                name: "Client Latency",
                value: `${recursiveRangeSymbol(latency, 250, ["🟡", "🟠", "🔴"])} *\`${latency} ms\`*`,
                inline: true
            },
            {
                name: "API Latency",
                value: `${recursiveRangeSymbol(apiLatency, 100, ["🟡", "🟠", "🔴"])} *\`${apiLatency} ms\`*`,
                inline: true
            }])

        await interaction.followUp({
            ephemeral: true,
            embeds: [ embed ]
        });
    }
};