// src/components/SocialMedia.js
import React, { useState } from 'react';
import { Button, Input, Typography, Form, Select } from 'antd';
import { generateSocialMediaContent } from '../api';

const { Title } = Typography;
const { Option } = Select;

const SocialMedia = () => {
  const [form] = Form.useForm();
  const [generatedContent, setGeneratedContent] = useState('');

  const onFinish = async (values) => {
    const {
      companyName,
      industry,
      productsServices,
      mission,
      customerDemographics,
    } = values;

    const prompt = `Create a 140 character promotional twitter post for ${companyName}, a company in the ${industry} industry. They offer ${productsServices}. Their mission statement is: "${mission}". The target audience is ${customerDemographics}. Generate engaging content with a casual and informative tone, including a call-to-action.`;

    const content = await generateSocialMediaContent(prompt);
    setGeneratedContent(content);
  };

  return (
    <div>
      <Title level={2}>Social Media Content Generation</Title>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        style={{ marginBottom: '20px' }}
      >
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[{ required: true, message: 'Please enter the company name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Industry"
          name="industry"
          rules={[{ required: true, message: 'Please enter the industry' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Products/Services"
          name="productsServices"
          rules={[
            { required: true, message: 'Please enter the products or services' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mission Statement/Ethos"
          name="mission"
          rules={[
            { required: true, message: 'Please enter the mission statement' },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Customer Demographics (age, gender, location, interests)"
          name="customerDemographics"
          rules={[
            {
              required: true,
              message: 'Please enter the customer demographics',
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Generate Content
          </Button>
        </Form.Item>
      </Form>
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
