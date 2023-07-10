import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ColorResolvable,
  GuildMember,
  EmbedBuilder,
  User,
} from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
  name: "changelog",
  description: "Registre seus changelog",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "player",
      description: "Nick do Player",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "dia",
      description: "dia/mes/ano",
      type: ApplicationCommandOptionType.String,
      required: true,
    },

    {
      name: "ação",
      required: true,
      description: "Qual a ação?",
      type: ApplicationCommandOptionType.String,
      choices: [
        { name: "Promovido", value: "Promovido" },
        { name: "Removido", value: "Removido" },
        { name: "Integrado", value: "Integrado" },
      ],
    },
    {
      name: "cargo",
      required: true,
      description: "qual o cargo que ele ocupa?",
      type: ApplicationCommandOptionType.String,
      choices: [
        { name: "Ajudante", value: "Ajudante" },
        { name: "Moderador", value: "Moderador" },
        { name: "Administrador", value: "Administrador" },
        { name: "Coordenador", value: "Coordenador" },
        { name: "Gerente", value: "Gerente" },
        { name: "Diretor", value: "Diretor" },
        { name: "Fundador", value: "Fundador" },
      ],
    },
  ],
  async run({ interaction, options }) {
    if (!interaction.inCachedGuild()) return;

    const player = options.getString("player", true);
    const dia = options.getString("dia", true);
    const acao = options.getString("ação", true);
    const cargo = options.getString("cargo", true);

    const {guild, member} = interaction;
    const roleManager = guild.roles;
   

    if(cargo == "Ajudante"){
      var idCargo = await roleManager.fetch("1092566863235534970").catch(() => null)
      if(!idCargo) return;
      if (acao == "Removido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** da equipe.
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Promovido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** a ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Integrado") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** como ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
    }
    if(cargo == "Moderador"){
      var idCargo = await roleManager.fetch("1092566862363103283").catch(() => null)
      if(!idCargo) return;
      if (acao == "Removido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** da equipe.
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Promovido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** a ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Integrado") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** como ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
    }
    if(cargo == "Administrador"){
      var idCargo = await roleManager.fetch("1092566861574578256").catch(() => null)
      if(!idCargo) return;
      if (acao == "Removido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** da equipe.
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Promovido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** a ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Integrado") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** como ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
    }
    if(cargo == "Coordenador"){
      var idCargo = await roleManager.fetch("1125098011882688583").catch(() => null)
      if(!idCargo) return;
      if (acao == "Removido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** da equipe.
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Promovido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** a ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Integrado") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** como ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
    }
    if(cargo == "Gerente"){
      var idCargo = await roleManager.fetch("1092566860274352180").catch(() => null)
      if(!idCargo) return;
      if (acao == "Removido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** da equipe.
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Promovido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** a ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Integrado") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** como ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
    }
    if(cargo == "Diretor"){
      var idCargo = await roleManager.fetch("1092566859892674630").catch(() => null)
      if(!idCargo) return;
      if (acao == "Removido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** da equipe.
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Promovido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** a ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Integrado") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** como ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
    }
    if(cargo == "Fundador"){
      var idCargo = await roleManager.fetch("1092566858571460618").catch(() => null)
      if(!idCargo) return;

      if (acao == "Removido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** da equipe.
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Promovido") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** a ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
  
      if (acao == "Integrado") {
        const embed = new EmbedBuilder({
          title: `📢 Changelog - ${dia}`,
          description: `
              💼 ${player} foi **${acao.toUpperCase()}** como ${idCargo}
          `,
          author: User,
        }).setColor("#9dd5bb" as ColorResolvable);
  
        const message = await interaction.reply({
          fetchReply: false,
          embeds: [embed],
        });
      }
    }

    

    
  },
});
