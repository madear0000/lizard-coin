import { Telegraf, Markup } from "telegraf";

const token = "7374907095:AAEatX13LC_n-Mo_-5FrT8_tlh5k4RtfwnU";
const webAppUrl = "https://lizard-coin.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Hello! Start app",
    Markup.inlineKeyboard([
      Markup.button.webApp("Open button", `${webAppUrl}?ref=${ctx.payload}`),
    ]),
  );
});

bot.launch();
