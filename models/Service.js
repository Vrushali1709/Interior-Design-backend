const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String,
  image: String,
  features: [String],
});

module.exports = mongoose.model("Service", serviceSchema);