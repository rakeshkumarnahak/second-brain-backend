import { google } from "googleapis";
import { spawn } from "child_process";
import fs from "fs";
import dotenv from "dotenv";
import { Readable } from "stream";

dotenv.config();

const SERVICE_ACCOUNT_FILE = "../../service_account.json";
const FOLDER_ID = process.env.FOLDER_ID;
console.log(FOLDER_ID);

const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_FILE,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });

export async function uploadToDrive(fileBuffer, fileName) {
  console.log("Uploading to drive...");

  try {
    // const fileStream = fs.createReadStream(fileBuffer);
    const fileStream = await bufferToStream(fileBuffer);
    console.log(fileStream);

    //TODO: First check if any file of this filename already exists in this folder or not and then upload, if already exists then delete or rename the previous file and then upload
    const fileMetaData = {
      name: fileName,
      mimeType: "audio/mp3",
      parents: FOLDER_ID ? [FOLDER_ID] : [],
    };

    const media = {
      mimeType: "audio/mp3",
      body: fileStream,
    };

    const file = await drive.files.create({
      requestBody: fileMetaData,
      media: media,
      fields: "id",
    });

    console.log(`File uploaded successfully! File Id: ${file.data.id}`);
    return file.data.id;
  } catch (error) {
    console.log(error);
  }
}

async function bufferToStream(buffer) {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
}

async function bufferToTempFile(buffer) {
  const filePath = "temp_audio.mp3";
  fs.writeFileSync(filePath, buffer);
  return filePath;
}
