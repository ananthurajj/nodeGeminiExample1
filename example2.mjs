import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "node:fs";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const prompt = "Describe the content in the image in 3 lines.";

const imagePart = fileToGenerativePart(
  `./taj.jpg`,
  "image/jpeg",
);

const result = await model.generateContent([prompt, imagePart]);
console.log(result.response.text());