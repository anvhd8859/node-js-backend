import express from "express";
import { getBlog, createBlog } from "../controller/BlogController.js";

const blogRouter = express.Router();

blogRouter.get("/:blogId", getBlog);
blogRouter.post("/create", createBlog);

export default blogRouter;
