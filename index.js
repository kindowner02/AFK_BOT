// ================= Server (UptimeRobot ke liye) =================
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

// ================= Minecraft Bot =================
const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "thedemolisher.progamer.me", // <-- yaha apna IP/hostname
  port: 17776,                       // <-- yaha apna port
  username: "AFK_Bot"                // <-- bot ka naam
});

bot.on("login", () => {
  console.log("Bot logged in!");
});

bot.on("end", () => {
  console.log("Bot disconnected, retrying...");
 setTimeout(() => {
  console.log("Reconnecting bot...");
  bot = mineflayer.createBot({
    host: process.env.SERVER_IP,   // server ka IP
    port: process.env.SERVER_PORT, // port agar alag hai
    username: process.env.BOT_EMAIL || "MyBot", // bot ka username/email
    auth: "microsoft" // agar microsoft login hai
  });
}, 5000);
