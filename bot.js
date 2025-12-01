bot.start((ctx) => {
  ctx.reply(
    "🏟️ **Welcome to CryptoStadium!**\n\n" +
    "A fast 1v1 crypto strategy game where every round is a mind game.\n\n" +

    "🔥 **How it works:**\n" +
    "• Each match has **3 rounds**\n" +
    "• Every round gives you **3 random crypto networks**\n" +
    "• Allocate your hash power wisely\n" +
    "• Outsmart your opponent and score more points\n\n" +

    "🚧 **Early Access Notice**\n" +
    "This is the **initial version** and it's **free to play for now**.\n" +
    "Your feedback will directly shape the final launch.\n\n" +

    "Ready to test your strategy?",
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "⚡ Play CryptoStadium", url: "https://t.me/cryptostadiumbot/app" }],
          [{ text: "📢 Join Channel", url: "https://t.me/cryptostadiumnews" }],
          [{ text: "👥 Join Community", url: "https://t.me/crypto_stadium" }]
        ]
      }
    }
  );
});