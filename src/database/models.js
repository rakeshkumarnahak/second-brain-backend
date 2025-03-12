const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  originalText: String,
  summary: String,
  sourceType: String,
  timestamp: { type: Date, default: Date.now },
});

const Summary = mongoose.model("Summary", SummarySchema);

module.exports = { Summary };
