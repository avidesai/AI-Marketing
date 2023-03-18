
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
app.use(express.json());

app.use(cors());

const apiKey = process.env.OPENAI_API_KEY;

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

const getCompletion = async (prompt) => {
  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
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


app.post('/generate-ad-image', async (req, res) => {
  const { prompt, size } = req.body;
  try {
    const imageUrl = await generateAdImage(prompt, size);
    console.log('Server generated image URL:', imageUrl); // Add this line
    res.json({ url: imageUrl });
  } catch (error) {
    console.error('Error generating ad image:', error);
    res.status(500).json({ message: 'Error generating ad image' });
  }
});

async function generateAdImage(prompt, size) {
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: size
      })
    });

    const jsonResponse = await response.json();
    console.log('Server response:', jsonResponse); // Add this line
    return jsonResponse.data[0].url;
  } catch (error) {
    console.error(error);
  }
}



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
