import { spawn } from "child_process";

export async function getAudioBuffer(youtubeUrl) {
  return new Promise((resolve, reject) => {
    console.log("Downloading audio buffer...");

    const process = spawn("yt-dlp", [
      "--extract-audio",
      "--audio-format",
      "mp3",
      "-o",
      "-", // Output as stream
      youtubeUrl,
    ]);

    let chunks = []; // To accumulate the buffer
    let errorLogs = ""; // To store any errors

    process.stdout.on("data", (chunk) => {
      chunks.push(chunk); // Store buffer chunks
    });

    process.stdout.on("end", () => {
      console.log("✅ Download completed, merging buffer...");
      const fullBuffer = Buffer.concat(chunks); // Merge all chunks into a single buffer
      resolve(fullBuffer);
    });

    process.stderr.on("data", (err) => {
      const errMsg = err.toString();
      errorLogs += errMsg; // Append error logs (but don't reject immediately)

      if (errMsg.includes("ERROR") || errMsg.includes("unable")) {
        reject(new Error(`yt-dlp critical error: ${errMsg}`));
      }
    });

    process.on("error", (err) => {
      reject(new Error(`Failed to start yt-dlp process: ${err.message}`));
    });

    process.on("close", (code) => {
      if (code !== 0) {
        reject(
          new Error(
            `yt-dlp process exited with code ${code}. Logs: ${errorLogs}`
          )
        );
      }
    });
  });
}
