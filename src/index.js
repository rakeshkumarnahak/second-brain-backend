import express from "express";
import { PORT } from "./core/config.js";
import ingest from "./api/ingest.js";
import summarize from "./api/summarize.js";
import retrieve from "./api/retrieve.js";
import health from "./api/health.js";

const app = express();
app.use(express.json());

app.use("/api/ingest", ingest);
// app.use("/api/summarize", summarize);
// app.use("/api/retrieve", retrieve);
// app.use("/api/health", health);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
