import mongoose from "mongoose";
import logger from "../../utils/SystemLogger";

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;
const url = process.env.MONGO_URL;

mongoose.Promise = global.Promise;
mongoose.connect(url, {
  user,
  pass,
  dbName,
  autoCreate: true,
});

// Handle events
mongoose.connection.on("error", (err) => {
  logger.error("MongoDB connection error:", err);
});

mongoose.connection.once("open", () => {
  logger.info(`Connected to MongoDB`);
});

// Disconnect
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close().then(() => {
    logger.info(`Mongoose disconnected through ${msg}`);
    callback();
  }).catch((err) => {
    logger.error(`Mongoose disconnected error:`, err);
    callback();
  });
};

process.once("SIGUSR2", () => gracefulShutdown("nodemon restart", () => {
  process.kill(process.pid, "SIGUSR2");
}));

process.on("SIGINT", () => gracefulShutdown("App termination", () => {
  process.exit(0);
}));

process.on("SIGTERM", () => gracefulShutdown("Heroku app shutdown", () => {
  process.exit(0);
}));
