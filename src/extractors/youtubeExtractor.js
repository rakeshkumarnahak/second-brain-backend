const ytdl = require("ytdl-core");
const { transcribeAudio } = require("../utils/audioTranscriber");

const extractFromYouTube = async (url) => {
  const info = await ytdl.getInfo(url);
  const audioStream = ytdl(url, { filter: "audioonly" });
  const transcript = await transcribeAudio(audioStream);
  return transcript;
};

module.exports = { extractFromYouTube };
