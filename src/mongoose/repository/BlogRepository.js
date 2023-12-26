import mongoose from "mongoose";

const { Schema } = mongoose;

// define a schema for our blog repositories
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: new Date() },
  hidden: Boolean,
  meta: {
    votes: Number,
    favorites: Number,
  },
});

const BlogRepository = mongoose.model("Blog", blogSchema);

export default BlogRepository;
