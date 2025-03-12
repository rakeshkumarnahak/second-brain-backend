require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB_URI: process.env.DB_URI,
  LLM_API_KEY: process.env.LLM_API_KEY,
};
