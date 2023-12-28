import express from "express";
import mongoose from "mongoose";
import ApiRouter from "./router/ApiRouter.js";
import logger from "./utils/SystemLogger.js";
import { errorHandler } from "./utils/ExceptionHandler.js";

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;
const url = process.env.MONGO_URL;

const app = express();

mongoose.connect(url, {
  user,
  pass,
  dbName,
  autoCreate: true,
});

const { connection } = mongoose;

connection.once("open", () => {
  logger.info("MongoDB database connection established successfully");
});

const { SERVER_PORT: port = 5010 } = process.env;

app.use(express.json());

app.use("/api", ApiRouter);

app.use(errorHandler);

app.listen({ port }, () => {
  logger.info(`🚀 Server ready at http://localhost:${port}, ping api at http://127.0.0.1:${port}/api/ping`);
});
