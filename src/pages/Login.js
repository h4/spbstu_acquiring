import {Card, Col, Row} from 'antd';
import LoginForm from '../forms/LoginForm';
import React from 'react';
import MainLayout from '../layout/main';

const LoginPage = () => (
  <MainLayout showMenu={false}>
    <Row>
      <Col md={{span: 16, offset: 4}} lg={{span: 8, offset: 8}}>
        <Card title="Login">
          <LoginForm/>
        </Card>
      </Col>
    </Row>
  </MainLayout>
);

export default LoginPage;
