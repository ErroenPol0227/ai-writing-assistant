export const summarizeText = async (text: string): Promise<string> => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  console.log(apiKey);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Summarize the following text in 1-2 sentences.",
        },
        { role: "user", content: text },
      ],
      temperature: 0.5,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    return data.choices[0].message.content.trim();
  } else {
    console.error(data);
    throw new Error(data.error?.message || "OpenAI API error");
  }
};
