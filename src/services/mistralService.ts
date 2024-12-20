const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

export const generateBlogPost = async () => {
  console.log("Generating blog post with Mistral AI...");
  
  const prompt = `Generate a blog post about URL shortening and link management. 
  Include a title, introduction, main content with 2-3 sections, and a conclusion. 
  Make it informative and engaging for readers interested in link management tools.`;

  try {
    const response = await fetch(MISTRAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: "mistral-tiny",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Generated blog post:", data);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating blog post:", error);
    throw error;
  }
};
