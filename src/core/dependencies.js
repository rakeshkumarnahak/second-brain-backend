import { extractFromYouTube } from "../extractors/youtubeContentExtractor.js";
import { extractFromAudio } from "../extractors/audioContentExtractor.js";
import { extractFromWeb } from "../extractors/webContentExtractor.js";
import { extractFromDocument } from "../extractors/documentParser.js";

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
