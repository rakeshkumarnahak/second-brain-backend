import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "Server is running 🚀" });
});

module.exports = router;
