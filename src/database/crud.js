import { Summary } from "./models.js";

const saveSummary = async (originalText, summary, sourceType) => {
  return await Summary.create({ originalText, summary, sourceType });
};

const fetchSummaries = async () => {
  return await Summary.find();
};

module.exports = { saveSummary, fetchSummaries };
