import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Marketing AI</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/social-media">Social Media</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/ad-marketing">Ad/Marketing Copy</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
