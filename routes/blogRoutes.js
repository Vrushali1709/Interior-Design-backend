// const express = require("express");
// const router = express.Router();

// const {
//   createBlog,
//   getBlogs,
// } = require("../controllers/blogController");

// router.post("/", createBlog);
// router.get("/", getBlogs);

// module.exports = router;


const express = require("express");
const router = express.Router();

const {
  getBlogs,
  getBlogById,
} = require("../controllers/blogController");

// ✅ ADD THIS MISSING ROUTE
const Blog = require("../models/Blog");

router.post("/", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", getBlogs);
router.get("/:id", getBlogById);

module.exports = router;