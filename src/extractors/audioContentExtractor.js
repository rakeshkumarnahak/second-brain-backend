import { AssemblyAI } from "assemblyai";
import dotenv from "dotenv";

dotenv.config();

export async function extractFromAudio(fileId) {
  console.log(fileId);
  console.log("Generating text transcript from audio...");
  try {
    const assemblyAIClient = new AssemblyAI({
      apiKey:
        process.env.ASSEMBLYAI_API_KEY || "8a601aceca8f409987fc2c20f62922c4",
    });

    const audioUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const params = {
      audio: audioUrl,
      speaker_labels: true,
    };

    let transcript = await assemblyAIClient.transcripts.transcribe(params);

    if (transcript.status === "error") {
      console.error(`Transcription failed: ${transcript.error}`);
      process.exit(1);
    }

    console.log("Transcript generation successful!");

    return transcript.text;
  } catch (error) {
    console.log("Error in transcript generation!");
    console.log(error);
  }
}
