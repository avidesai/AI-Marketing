import React, { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { generateSocialMediaContent } from '../api';

const { Title } = Typography;

const SocialMedia = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  async function handleGenerateContent() {
    const content = await generateSocialMediaContent(prompt);
    setGeneratedContent(content);
  }

  return (
    <div>
      <Title level={2}>Social Media Content Generation</Title>
      <Input.TextArea
        placeholder="Enter your prompt here"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        style={{ marginBottom: '20px' }}
      />
      <Button type="primary" onClick={handleGenerateContent}>
        Generate Content
      </Button>
      {generatedContent && (
        <div style={{ marginTop: '20px' }}>
          <Title level={4}>Generated Content:</Title>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default SocialMedia;
