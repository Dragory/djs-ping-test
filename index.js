import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.TOKEN;
if (! token) {
  console.error("TOKEN env var required");
  process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

function printPing() {
  console.clear();
  console.log(Date.now());
  console.log(`WS: ${client.ws.ping}ms`);
}

client.on("ready", () => {
  printPing();
  setInterval(printPing, 1000);
});

client.login(token);
