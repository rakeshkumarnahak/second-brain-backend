const axios = require("axios");
const { LLM_API_KEY } = require("../core/config");

const summarizeText = async (text) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "gpt-4",
      prompt: `Summarize the following:\n${text}`,
      max_tokens: 150,
    },
    {
      headers: { Authorization: `Bearer ${LLM_API_KEY}` },
    }
  );

  return response.data.choices[0].text.trim();
};

module.exports = { summarizeText };
