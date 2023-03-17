import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import Navbar from './components/Navbar';
import AppFooter from './components/Footer';
import SocialMedia from './components/SocialMedia';
import AdMarketing from './components/AdMarketing';
import HomePage from './components/HomePage';

const { Content } = Layout;

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/ad-marketing" element={<AdMarketing />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
};

export default AppRouter;
