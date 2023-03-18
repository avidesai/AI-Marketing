import React, { useState } from 'react';
import { Typography, Input, Button, message, Select } from 'antd';
import { createAdImage } from '../api';

const { Title } = Typography;
const { Option } = Select;

const AdMarketing = () => {
  const [prompt, setPrompt] = useState('');
  const [adSize, setAdSize] = useState('256x256');
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');

  async function handleGenerateAdImage() {
    try {
      const imageUrl = await createAdImage(prompt, adSize);
      setGeneratedImageUrl(imageUrl);
      console.log('Generated image URL:', imageUrl); // Add this line
      message.success('Ad image generated successfully');
    } catch (error) {
      message.error('Error generating ad image');
      console.error('Error generating ad image:', error);
    }
  }

  return (
    <div>
      <Title level={2}>Advertisement Image Generation</Title>
      <Input.TextArea
        placeholder="Enter a detailed description of the advertisement"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        style={{ marginBottom: '20px' }}
      />
      <Select
        defaultValue={adSize}
        style={{ width: 120, marginBottom: '20px' }}
        onChange={(value) => setAdSize(value)}
      >
        <Option value="256x256">256x256</Option>
        <Option value="512x512">512x512</Option>
        <Option value="1024x1024">1024x1024</Option>
      </Select>
      <Button type="primary" onClick={handleGenerateAdImage}>
        Generate Ad Image
      </Button>
      {generatedImageUrl && (
        <div style={{ marginTop: '20px' }}>
          <Title level={4}>Generated Ad Image:</Title>
          <img src={generatedImageUrl} alt="Generated Ad" />
        </div>
      )}
    </div>
  );
};

export default AdMarketing;
