import express from "express";
import { getBlogs, getBlogById, createBlog } from "../controller/BlogController.js";

const blogRouter = express.Router();

blogRouter.get("/", getBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/create", createBlog);

export default blogRouter;
