import BlogRepository from "../mongoose/repository/BlogRepository.js";

export default class BlogService {
  static async create(blogData) {
    return BlogRepository.create(blogData);
  }

  static async getById(blogId) {
    return BlogRepository.findById(blogId);
  }
}
