import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, FileTextOutlined } from '@ant-design/icons';
import './HomePage.css';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
        <section className="hero-section">
            <div className="hero-text-container">
                <Title>AI Marketing App</Title>
                <p>
                Generate stunning marketing materials for your business using AI-powered content and designs.
                </p>
                <Link to="/social-media">
                <Button type="primary" size="large">Get Started</Button>
                </Link>
            </div>
        </section>
      {/* Features Section */}
      <section className="features-section">
        <Title level={2}>Features</Title>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <FacebookOutlined style={{ fontSize: '36px', marginBottom: '16px' }} />
            <Title level={3}>Social Media Content</Title>
            <Paragraph>
              Create engaging social media posts, captions, and hashtags that resonate with your target audience.
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <FileTextOutlined style={{ fontSize: '36px', marginBottom: '16px' }} />
            <Title level={3}>Ad/Marketing Copy</Title>
            <Paragraph>
              Generate persuasive ad headlines, descriptions, and calls-to-action to drive better conversion rates.
            </Paragraph>
          </Col>
        </Row>
      </section>
      {/* Call-to-Action */}
      <section className="cta-section">
        <Title level={2}>Ready to transform your marketing?</Title>
        <Link to="/social-media">
          <Button type="primary" size="large">Get Started</Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
