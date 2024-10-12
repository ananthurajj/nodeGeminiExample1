import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

const prompt = "Tell me a joke about programming.";

const result = await model.generateContent(prompt);
console.log(result.response.text());
