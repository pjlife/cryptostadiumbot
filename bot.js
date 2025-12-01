import { Telegraf } from "telegraf";
import express from "express";

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start message
bot.start((ctx) => {
  ctx.reply(
    "🏟️ Welcome to CryptoStadium!\n\n" +
    "• 3 Rounds per match\n" +
    "• Random crypto networks\n" +
    "• Allocate hash power and outsmart your opponent\n\n" +
    "This is the initial version and it's free for now. Your feedback helps us improve!",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⚡ Play CryptoStadium!", url: "https://t.me/cryptostadiumbot/app" }],
          [{ text: "📢 Join Channel", url: "https://t.me/YOUR_CHANNEL" }],
          [{ text: "👥 Join Group", url: "https://t.me/YOUR_GROUP" }]
        ]
      }
    }
  );
});

// Render requires a web server running
const app = express();
app.get("/", (req, res) => res.send("CryptoStadium Bot is running"));
app.listen(10000, () => console.log("Server started"));

// Launch bot
bot.launch();