import express from "express";
import { processInput } from "../core/dependencies.js";

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

export default router;
