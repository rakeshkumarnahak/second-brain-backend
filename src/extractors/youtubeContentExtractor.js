import ytdlp from "yt-dlp-exec";
import ytdl from "ytdl-core";
import dotenv from "dotenv";
import { spawn } from "child_process";
import { PassThrough } from "stream";
import tmp from "tmp";
import fs from "fs";
import { uploadToDrive } from "../../utils/driveHelper.js";
import { getAudioBuffer } from "../../utils/audioBufferHelper.js";
import { extractFromAudio } from "./audioContentExtractor.js";

dotenv.config();

export const extractAudioFromYoutubeVideoLink = async (
  youtubeLink = "https://www.youtube.com/watch?v=jNQXAC9IVRw"
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
    console.log(transcription);
    return { content: transcription, audioExtractionStatus: true };
  } catch (error) {
    console.log(error);
    return { audioOutputPath: null, audioExtractionStatus: false };
  }
};

extractAudioFromYoutubeVideoLink();
