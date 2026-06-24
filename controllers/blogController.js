// const Blog = require("../models/Blog");

// const createBlog = async (req, res) => {
//   try {
//     const blog = await Blog.create(req.body);
//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { createBlog, getBlogs };


const Blog = require("../models/Blog");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
};

module.exports = {
  getBlogs,
  getBlogById,
};