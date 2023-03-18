
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
app.use(express.json());

app.use(cors());

const apiKey = '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';
const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const getCompletion = async (prompt) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7
      })
    });

    const jsonResponse = await response.json();
    return jsonResponse.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}

app.post('/generate-content', async (req, res) => {
  const { prompt } = req.body;
  try {
    const generatedText = await getCompletion(prompt);
    res.json({ text: generatedText });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ message: 'Error generating content' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
