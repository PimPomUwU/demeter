import { MongoClient } from "mongodb";

// --- CONFIGURA AQUÍ TU CONEXIÓN ---
const DB_USER = "user";           // tu usuario Atlas
const DB_PASSWORD = "passwoord";  // tu contraseña Atlas
const DB_NAME = "nameDB";                // nombre de tu base de datos
const COLLECTION_NAME = "collection";  // nombre de la colección donde guardarás mensajes

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.zagfq6p.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`; //Este es un ejemplo de donde implemetar variables correspondientes 
const client = new MongoClient(uri);
let dbInstance = null;

export async function connectDB() {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db(`${DB_NAME}`); // nombre de la base
  }
  return dbInstance;
}

export async function saveToDB(messages, conversationId) {
  const db = await connectDB();
  const collection = db.collection(`${COLLECTION_NAME}`); // nombre de la colección
  await collection.updateOne(
    { conversationId },
    { $set: { conversationId, messages } },
    { upsert: true }
  );
  console.log(`💾 Conversación ${conversationId} guardada en MongoDB`);
}