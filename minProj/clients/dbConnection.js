import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const client = new MongoClient(process.env.DB_URL);
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    console.log("Connected to MongoDB");
    return db;
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export const closeConnection = async () => {
  const client = new MongoClient(process.env.DB_URL);
  try {
    await client.close();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Failed to disconnect from MongoDB", err);
    process.exit(1);
  }
};
