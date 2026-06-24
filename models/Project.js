const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    area: String,
    budget: String,
    before: String,
    after: String,
    desc: String,

    client: String,
    location: String,
    duration: String,

    highlights: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);