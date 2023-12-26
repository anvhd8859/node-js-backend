import express from "express";
import PingRouter from "./PingRouter.js";
import BlogRouter from "./BlogRouter.js";

const ApiRouter = express.Router();

ApiRouter.use("/ping", PingRouter);
ApiRouter.use("/blog", BlogRouter);

export default ApiRouter;
