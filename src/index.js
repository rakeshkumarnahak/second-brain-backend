const express = require("express");
const mongoose = require("mongoose");
const { PORT, DB_URI } = require("./core/config");

const app = express();
app.use(express.json());

app.use("/api/ingest", require("./api/ingest"));
app.use("/api/summarize", require("./api/summarize"));
app.use("/api/retrieve", require("./api/retrieve"));
app.use("/api/health", require("./api/health"));

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
