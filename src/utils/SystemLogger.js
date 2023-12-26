import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      filename: "%DATE%.log",
      datePattern: "YYYY-MM-DD ",
      zippedArchive: true,
      maxSize: "20m",
      dirname: "logs",
      maxFiles: "14d",
    }),
  ],
});

export default logger;
