// gpt/magnus/index.js
import { registerAgent, sendMessage } from "../../a2a/index.js";
import fs from "fs";
import path from "path";

const AGENT_NAME = "magnus";
const DATA_FILE = path.resolve(`./response_magnus.json`);

function loadData() {
  if (fs.existsSync(DATA_FILE)) return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  return {};
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export function handleMessage(from, payload) {
  const data = loadData();

  if (payload.type === "conversation_update") {
    data.strategies = data.strategies || [];
    data.strategies.push({ from, content: payload.content, timestamp: new Date().toISOString() });
    saveData(data);
  }

  if (payload.type === "knowledge_share") {
    console.log(`[${AGENT_NAME}] usando historial de ${from} para estrategia`);
  }
}

export function sendToAgent(to, payload) {
  sendMessage(AGENT_NAME, to, payload);
}

registerAgent(AGENT_NAME, handleMessage);
console.log(`[${AGENT_NAME}] registrado en A2A`);
