// gpt/demeter/index.js
import { registerAgent, sendMessage } from "../../a2a/index.js";
import fs from "fs";
import path from "path";

const AGENT_NAME = "demter";
const HISTORY_FILE = path.resolve("./response_demeter.json");

function loadHistory() {
  if (fs.existsSync(HISTORY_FILE)) {
    return JSON.parse(fs.readFileSync(HISTORY_FILE, "utf8"));
  }
  return { IA: [], Aprendiz: [] };
}

function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

export function handleMessage(from, payload) {
  const history = loadHistory();

  if (payload.type === "conversation_update") {
    const timestamp = new Date().toISOString();
    if (payload.metadata.role === "IA") {
      history.IA.push({
        IA: payload.metadata.agent || from,
        Mensaje: payload.content,
        Timestamp: timestamp
      });
    } else {
      history.Aprendiz.push({
        Mensaje: payload.content,
        Timestamp: timestamp
      });
    }
    saveHistory(history);

  } else if (payload.type === "request_history") {
    sendMessage(AGENT_NAME, from, {
      type: "knowledge_share",
      content: JSON.stringify(history),
      metadata: { confidence: 1, context: "historial completo", tags: ["historial"] }
    });
  }
}

registerAgent(AGENT_NAME, handleMessage);
console.log(`[${AGENT_NAME}] registrado en A2A y listo para recibir mensajes.`);
