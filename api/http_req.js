import OpenAI from "openai";



const openai = new OpenAI({
  apiKey: "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",
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true, 
});


// Function jo message lega aur response return karega
export async function getAIResponse(userMessage) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${"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"}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "<YOUR_SITE_URL>", 
        "X-Title": "<YOUR_SITE_NAME>",    
      },
      body: JSON.stringify({
        model: "openai/gpt-4o",
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 500,  //Free limit ke andar
      }),
    });
    const data = await response.json();
    return data.choices[0].message.content


  // Direct reply text return karega
  } catch (error) {
    console.error("AI Error:", error);
    return "Something went wrong!";
  }
}
