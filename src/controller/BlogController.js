import BlogService from "../service/BlogService.js";

export const getBlogs = async (req, res) => {
  const blogData = await BlogService.getBlogs();
  return res.status(200).send({
    blog: blogData,
    success: true,
  });
};

export const getBlogById = async (req, res) => {
  const { blogId } = req.params;
  const blogData = await BlogService.getById(blogId);
  return res.status(200).send({
    blog: blogData,
    success: true,
  });
};

export const createBlog = async (req, res, next) => {
  try {
    const blogData = await BlogService.create(req.body);
    res.status(200).send({
      blog: blogData,
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
