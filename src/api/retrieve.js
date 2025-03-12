const express = require("express");
const { fetchSummaries } = require("../database/crud");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const summaries = await fetchSummaries();
    res.json({ summaries });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
