import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const LLM_API_KEY = process.env.LLM_API_KEY;
export const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY;
export const GOOGLE_GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY;
