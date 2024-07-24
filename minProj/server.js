import { connectDB, closeConnection } from "./clients/dbConnection.js";
import { generateFilesForAllOrganizationContents } from "./mainFunctionalities/generatingData.js";
import { transferFiles } from "./mainFunctionalities/transferFiles.js";
import { minioClient } from "./clients/minio.js";

const db = await connectDB();

global.db = db;
global.minioClient = minioClient;
global.minioBucket = process.env.MINIO_BUCKET;

// await generateFilesForAllOrganizationContents();
await transferFiles();
await closeConnection();
