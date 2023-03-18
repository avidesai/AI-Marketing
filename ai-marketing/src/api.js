export async function generateSocialMediaContent(prompt) {
    const response = await fetch('http://localhost:5001/generate-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
  
    const data = await response.json();
  
    return data.text;
  }
  