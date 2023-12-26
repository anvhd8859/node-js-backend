import express from "express";
import { ping, pong } from "../controller/PingController.js";

const pingRouter = express.Router();

pingRouter.get("/", ping);
pingRouter.get("/pong", pong);

export default pingRouter;
