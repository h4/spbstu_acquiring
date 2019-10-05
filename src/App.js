import React from "react";
import "./App.css";
import {Layout, Menu, Row, Col, Card} from "antd";
import LoginForm from "./LoginForm";

const {Header, Footer, Content} = Layout;

function App() {
  return (
    <div style={{minHeight: "100vh"}}>
      <Layout>
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
        <Content style={{padding: 36}}>
          <Row>
            <Col md={{ span: 16, offset: 4 }} lg={{ span: 8, offset: 8 }}>
              <Card title="Login">
                <LoginForm />
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row>
            <Col md={6}>&copy; 2019 Nobody Inc</Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
