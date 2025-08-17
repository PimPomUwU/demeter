import { MongoClient } from "mongodb";

// --- CONFIGURA AQUÍ TU CONEXIÓN ---
const DB_USER = "user";           // tu usuario Atlas
const DB_PASSWORD = "passwoord";  // tu contraseña Atlas
const DB_NAME = "nameDB";         // nombre de tu base de datos
const COLLECTION_NAME = "collection";  // colección principal de mensajes

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.zagfq6p.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`; 
const client = new MongoClient(uri);
let dbInstance = null;

// 🔹 Mantener la conexión
export async function connectDB() {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db(`${DB_NAME}`);
  }
  return dbInstance;
}

// 🔹 Guardar o actualizar mensajes de una conversación
export async function saveToDB(messages, conversationId) {
  const db = await connectDB();
  const collection = db.collection(`${COLLECTION_NAME}`);
  await collection.updateOne(
    { conversationId },
    { $set: { conversationId, messages } },
    { upsert: true }
  );
  console.log(`💾 Conversación ${conversationId} guardada en MongoDB`);
}

// ==================================================
// 🔹 FUNCIONES NUEVAS (no se borra nada, solo se agrega)
// ==================================================

// Guardar mensajes asociados a un agente
export async function saveAgentConversation(agentName, messages, conversationId) {
  const db = await connectDB();
  const collection = db.collection(`${COLLECTION_NAME}`);
  await collection.updateOne(
    { agentName, conversationId },
    { $set: { agentName, conversationId, messages, updatedAt: new Date() } },
    { upsert: true }
  );
  console.log(`🤖 [${agentName}] conversación ${conversationId} guardada en MongoDB`);
}

// Recuperar histórico de un agente
export async function getAgentConversations(agentName) {
  const db = await connectDB();
  const collection = db.collection(`${COLLECTION_NAME}`);
  const result = await collection.find({ agentName }).toArray();
  return result;
}

// Recuperar TODAS las conversaciones
export async function getAllConversations() {
  const db = await connectDB();
  const collection = db.collection(`${COLLECTION_NAME}`);
  return await collection.find({}).toArray();
}

// Eliminar una conversación específica
export async function deleteConversation(conversationId) {
  const db = await connectDB();
  const collection = db.collection(`${COLLECTION_NAME}`);
  await collection.deleteOne({ conversationId });
  console.log(`🗑️ Conversación ${conversationId} eliminada de MongoDB`);
}
