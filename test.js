import { quiliano } from "./gpt/quiliano/index_quiliano.js";
import { magnus } from "./gpt/magnus/index_magnus.js";
import { leonardo } from "./gpt/leonardo/index_leonardo.js";

// 🔹 Mantén aquí tu código original de test.js (simulaciones simples, etc.)

// 🔹 Nueva simulación extendida multiagente/multiusuario
export async function runExtendedSimulation() {
  console.log("--- Simulación A2A Multiagente Multiusuario ---");

  // Definir agentes y usuarios asociados
  const sessions = [
    { agent: quiliano, users: ["Usuario A", "Usuario D"] },
    { agent: magnus, users: ["Usuario B", "Usuario E"] },
    { agent: leonardo, users: ["Usuario C", "Usuario F"] },
  ];

  // Iterar cada agente
  for (const { agent, users } of sessions) {
    for (const user of users) {
      let convId = null;
      for (let i = 1; i <= 10; i++) {
        convId = await agent.sendUserMessage(`${user}: mensaje ${i}`, convId);
      }

      // Mostrar historial acumulado de esa conversación
      await agent.requestHistory(convId);

      // Finalizar conversación -> sube JSON completo a MongoDB
      await agent.endConversation(convId);
    }
  }
}

// ✅ Ejecutar la simulación extendida cuando se corra este archivo
runExtendedSimulation();
