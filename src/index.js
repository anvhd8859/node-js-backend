import express from "express";
import ApiRouter from "./router/ApiRouter.js";
import logger from "./utils/SystemLogger.js";
import { errorHandler } from "./utils/ExceptionHandler.js";

const app = express();

const { SERVER_PORT: port = 5010 } = process.env;

app.use(express.json());

app.use("/api", ApiRouter);

app.use(errorHandler);

app.listen({ port }, () => {
  logger.info(`🚀 Server ready at http://localhost:${port}, ping api at http://127.0.0.1:${port}/api/ping`);
});
