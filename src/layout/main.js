import React from "react";
import {Col, Layout, Menu, Row} from 'antd';

const {Header, Footer, Content} = Layout;

function MainLayout({children}) {
  return <Layout style={{minHeight: "100vh"}}>
    <Header>
      <Row type="flex" justify="space-between">
        <Col md={6} style={{color: "white"}}>NoBody Inc</Col>
        <Col md={5} lg={3}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["en"]}
            style={{lineHeight: "64px"}}>
            <Menu.Item key="en">En</Menu.Item>
            <Menu.Item key="ru">Ru</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
    <Content style={{padding: 36, minHeight: 'calc(100vh - 164px)'}}>
      {children}
    </Content>
    <Footer>
      <Row>
        <Col md={6}>&copy; 2019 Nobody Inc</Col>
      </Row>
    </Footer>
  </Layout>
}

export default MainLayout;
