const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/projectRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const blogRoutes = require("./routes/blogRoutes");

dotenv.config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);

app.use("/api/contact", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/blogs", blogRoutes);
app.get("/", (req, res) => {
res.send("Interior Design Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
