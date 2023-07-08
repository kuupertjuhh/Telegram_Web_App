const { Telegraf } = require("telegraf");
const TOKEN = "6166731294:AAE2nCPpgDVmqNUsdk47Mjg_HYrqFgRBX2g";
const bot = new Telegraf(TOKEN);

const web_link = "https://jocular-chaja-b37635.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
