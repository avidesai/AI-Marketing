const openai = require('openai');

openai.apiKey = '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'; // Replace with your actual OpenAI API key

async function generateSocialMediaContent(prompt) {
  const response = await openai.Completion.create({
    engine: 'davinci-codex',
    prompt: prompt,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 0.7,
  });

  return response.choices[0].text.trim();
}

module.exports = { generateSocialMediaContent };
