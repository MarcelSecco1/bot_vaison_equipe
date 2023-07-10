import {
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ButtonBuilder,
  ButtonStyle,
  ColorResolvable,
  ComponentType,
  EmbedBuilder,
} from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
  name: "registrarmute",
  description: "registrar mutes in-gmae",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "player",
      description: "nick do punido",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "tempo",
      description: "tempo de punição",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "motivo",
      description: "motivo da punição",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "prova",
      description: "prova da punição",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  async run({ interaction, options }) {
    if (!interaction.inCachedGuild()) return;

    const { member, channel } = interaction;
    //interaction.deferReply({ephemeral: false})
    const nick = options.getString("player", true);
    const tempo = options.getString("tempo", true);
    const motivo = options.getString("motivo", true);
    const prova = options.getString("prova", true);

    const embed = new EmbedBuilder({
      title: "Mute",
      description: `
                    Autor: ${member.user} \n
                    Player: ${nick} \n
                    Tempo: ${tempo} \n
                    Motivo: ${motivo} \n
                    Prova: ${prova} \n
                `,
    }).setColor("#2986cc" as ColorResolvable);

    const message = await interaction.reply({
      fetchReply: true,
      embeds: [embed],
      components: [
        new ActionRowBuilder<ButtonBuilder>({
          components: [
            new ButtonBuilder({
              customId: "apagar-button",
              label: "Apagar",
              style: ButtonStyle.Danger,
              emoji: "🗑",
            }),
          ],
        }),
      ],
    });

    const collector = message.createMessageComponentCollector({
      componentType: ComponentType.Button,
    });

    collector.on("collect", async (buttonInteraction) => {
      buttonInteraction.channel?.bulkDelete(1);
      /*content: "Deseja mesmo apagar?",
                    components: [new ActionRowBuilder<ButtonBuilder>({
                        components: [
                             new ButtonBuilder({
                                customId: "apagar", 
                                label: "Sim", 
                                style: ButtonStyle.Success,
                                emoji: "✅"
                             }),
                             new ButtonBuilder({
                                customId: "cancelar", 
                                label: "Não", 
                                style: ButtonStyle.Secondary,
                                emoji: "❌"
                             })
                        ]})]
                        */
    });
  },
});
