import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
  generationConfig: {
    candidateCount: 1,
    temperature: 1.8,
    stopSequences: ["THE END"]
  },
});

const result = await model.generateContent(
  "Tell me a story about a magic backpack.",
);

result.response.candidates.forEach((candidates,i)=>{
    console.log(`<======================== Response ${i+1}: Start ========================>`)
    console.log(candidates.content.parts[0].text)
    console.log(`<======================== Response ${i+1}: End ========================>`)
})
