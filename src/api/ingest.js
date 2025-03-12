const express = require("express");
const { processInput } = require("../core/dependencies");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { sourceType, url } = req.body;
    const data = await processInput(sourceType, url);
    res.json({ message: "Data ingested successfully", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
