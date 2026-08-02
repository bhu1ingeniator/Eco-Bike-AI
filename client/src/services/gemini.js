import { GoogleGenerativeAI } from "@google/generative-ai";
console.log(import.meta.env.VITE_GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);
const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
});

export async function getBikeRecommendation(bike) {
  const prompt = `
You are an expert bike advisor.

Analyze the following bike and give a concise recommendation.

Bike Details:
Brand: ${bike.brand}
Model: ${bike.model}
Engine: ${bike.engine}
Mileage: ${bike.mileage}
Fuel: ${bike.fuel}
Emission: ${bike.emission}
Eco Score: ${bike.ecoScore}/100

Return:
1. Overall Recommendation
2. Best Use Case
3. Eco Friendliness
4. Buying Advice

Keep the response under 120 words.
`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
  console.error("Gemini Error:", error);

  if (error.message) {
    console.error(error.message);
  }

  return "Unable to generate AI recommendation at the moment.";
}
}