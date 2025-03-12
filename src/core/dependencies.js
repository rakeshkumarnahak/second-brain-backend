const { extractFromYouTube } = require("../extractors/youtubeExtractor");
const { extractFromAudio } = require("../extractors/audioExtractor");
const { extractFromWeb } = require("../extractors/webScraper");
const { extractFromDocument } = require("../extractors/documentParser");

const processInput = async (sourceType, url) => {
  switch (sourceType) {
    case "youtube":
      return await extractFromYouTube(url);
    case "audio":
      return await extractFromAudio(url);
    case "website":
      return await extractFromWeb(url);
    case "document":
      return await extractFromDocument(url);
    default:
      throw new Error("Invalid source type");
  }
};

module.exports = { processInput };
