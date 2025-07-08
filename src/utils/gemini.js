require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load your API key from .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Write a short poem about space and stars";

  const result = await model.generateContent(prompt);
  const response = result.response;
  console.log("Gemini says:\n", response.text());
}

run().catch(console.error);
