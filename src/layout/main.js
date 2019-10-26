import React from "react";
import {Col, Layout, Menu, Row} from 'antd';
import UserMenu from './UserMenu';
import Logo from './Logo';
import MainMenu from './MainMenu';

const {Header, Footer, Content} = Layout;

function MainLayout({showMenu = true, children}) {
  const styles = {
    minHeight: 'calc(100vh - 164px)',
    padding: 36,
  };

  return <Layout style={{minHeight: "100vh"}}>
    <Header>
      <Row type="flex" justify="space-between">
        <Col md={6} style={{color: "white"}}>
          <Logo>NoBody Inc</Logo>
        </Col>
        <Col md={6} lg={5}>
          <Menu
            mode="horizontal"
            align="right"
            defaultSelectedKeys={["en"]}
            style={{lineHeight: "64px", padding: "0 12px"}}>
            <Menu.Item key="en">En</Menu.Item>
            <Menu.Item key="ru">Ru</Menu.Item>
            <UserMenu/>
          </Menu>
        </Col>
      </Row>
    </Header>
    <Layout>
      {showMenu && <MainMenu/>}
      <Content style={styles}>
        {children}
      </Content>
    </Layout>
    <Footer style={{background: '#d6d9de'}}>
      <Row>
        <Col md={6}>&copy; 2019 Nobody Inc</Col>
      </Row>
    </Footer>
  </Layout>
}

export default MainLayout;
