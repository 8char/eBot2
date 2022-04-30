import { Client, MessageEmbed} from "discord.js";
import Commands from "../Commands";
require("dotenv").config(`${__dirname}/../.env`);

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        console.log(`✔️  ${client.user.tag} is online`);
        if (!process.env.LOGGING_CHANNEL) return console.warn("⚠️ We suggest that you set up a logging channel id in the .env file!");
        const channel = await client.channels.cache.get(process.env.LOGGING_CHANNEL);
        const logEmbed = new MessageEmbed()
            .setTitle("🟢 __**I'm live!**__")
            .setDescription(`*Bot has been started at ${new Date()}*`)
            .setTimestamp()
            .setColor("#32CD32")
        if (channel?.isText())
            channel.send({embeds: [logEmbed]});
    });
};