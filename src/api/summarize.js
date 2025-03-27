import express from "express";
import { summarizeText } from "../llm/summarizer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    const summary = await summarizeText(text);
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
