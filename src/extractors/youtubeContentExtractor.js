import ytdlp from "yt-dlp-exec";
import ytdl from "ytdl-core";
import dotenv from "dotenv";
import { uploadToDrive } from "../../utils/driveHelper.js";
import { getAudioBuffer } from "../../utils/audioBufferHelper.js";
import { extractFromAudio } from "./audioContentExtractor.js";
import { summarise } from "../llm/summarizer.js";

dotenv.config();

export const extractAudioFromYoutubeVideoLink = async (
  youtubeLink
) => {
  try {
    if (!ytdl.validateURL(youtubeLink)) {
      throw new Error("Invalid YouTUbe URL!");
    }
    console.log("Starting Audio Extraction...");

    const videoInfo = await ytdlp(youtubeLink, {
      dumpSingleJson: true,
    });
    console.log(videoInfo.title);

    const audioFileTitle =
      videoInfo.title.length > 50
        ? videoInfo.title.substring(0, 50)
        : videoInfo.title;

    const audioBuffer = await getAudioBuffer(youtubeLink);
    console.log(audioBuffer);

    if (!audioBuffer) {
      throw new Error("❌ Failed to fetch audio buffer. Aborting process.");
    }

    const fileId = await uploadToDrive(audioBuffer, audioFileTitle);

    if (!fileId) {
      console.error("❌ File ID is undefined. Skipping transcription.");
    }

    const transcription = fileId && (await extractFromAudio(fileId));
    const summarisedData = await summarise(transcription);
    console.log(summarisedData);
    return { content: transcription, audioExtractionStatus: true };
  } catch (error) {
    console.log(error);
    return { audioOutputPath: null, audioExtractionStatus: false };
  }
};

extractAudioFromYoutubeVideoLink();
