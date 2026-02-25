
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (userPrompt: string) => {
  if (!API_KEY) return "API Key is missing.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an AI assistant for Mahan Panta, the Chairman of CPN-UML (नेकपा एमाले) in Nepal. 
        Your goal is to answer questions about his vision for 'Prosperous Nepal, Happy Nepali' (समृद्ध नेपाल, सुखी नेपाली). 
        Always respond in professional, polite, and formal Nepali. Use official political terminology of Nepal. 
        Mahan Panta is a visionary leader dedicated to social justice, infrastructure development, and national sovereignty.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "माफ गर्नुहोस्, केहि प्राविधिक समस्या आयो। कृपया फेरि प्रयास गर्नुहोस्।";
  }
};
