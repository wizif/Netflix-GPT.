require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// ✅ Load your API key from .env
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

async function run() {
  try {
    // ✅ Use free model
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const prompt = "Write a short poem about space and stars";

    const result = await model.generateContent(prompt);
    const response = result.response;

    // ✅ Await the text
    const text = await response.text();
    console.log("Gemini says:\n", text);

  } catch (err) {
    console.error("Error from Gemini:", err);
  }
}

run();
