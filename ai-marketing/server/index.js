const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const openai = require('openai');

openai.apiKey = process.env.OPENAI_API_KEY;

app.post('/generate-content', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.Completion.create({
      engine: 'davinci-codex',
      prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.7,
    });

    res.json({ text: response.choices[0].text });
  } catch (error) {
    res.status(500).json({ message: 'Error generating content' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
