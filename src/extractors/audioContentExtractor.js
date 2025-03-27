import { AssemblyAI } from "assemblyai";
import { ASSEMBLYAI_API_KEY } from "../core/config";

export async function extractFromAudio(audioUrl) {
  console.log(audioUrl);
  console.log("Generating text transcript from audio...");
  try {
    const assemblyAIClient = new AssemblyAI({
      apiKey: ASSEMBLYAI_API_KEY,
    });

    // const audioUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

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
