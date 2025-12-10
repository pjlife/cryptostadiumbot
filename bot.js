import { Telegraf } from "telegraf";
import express from "express";

// 1. Create bot (this must be FIRST)
const bot = new Telegraf(process.env.BOT_TOKEN);

// 2. /start handler
bot.start((ctx) => {
  ctx.reply(
    "🏟️ *Welcome to CryptoStadium!*\n\n" +
    "A fast 1v1 crypto strategy game where every round is a mind game.\n\n" +
    "🔥 *How it works:*\n" +
    "• 3 rounds per match\n" +
    "• Each round gives random crypto networks\n" +
    "• Allocate your hash power wisely\n" +
    "• Outsmart your opponent and score more points\n\n" +
    "🚧 *Early Access*\n" +
    "This is the initial version and it's free for now. Your feedback helps us improve!\n\n" +
    "Ready to play?",
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "⚡ Play CryptoStadium", url: "https://t.me/cryptostadiumbot" }],
          [{ text: "📢 Join Channel", url: "https://t.me/cryptostadiumnews" }],
          [{ text: "👥 Join Community", url: "https://t.me/crypto_stadium" }]
        ]
      }
    }
  );
});

// 3. Keep-alive server for Railway
const app = express();
app.get("/", (req, res) => res.send("CryptoStadium Bot is running"));
app.listen(process.env.PORT || 3000, () => {
  console.log("Web server running");
});

// 4. Launch bot
bot.launch();
