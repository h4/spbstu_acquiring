import {Card, Col, Row} from 'antd';
import React from 'react';
import MainLayout from '../layout/main';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

const ForgotPasswordPage = () => (
  <MainLayout showMenu={false}>
    <Row>
      <Col md={{span: 16, offset: 4}} lg={{span: 8, offset: 8}}>
        <Card title="Remember Password">
          <ForgotPasswordForm/>
        </Card>
      </Col>
    </Row>
  </MainLayout>
);

export default ForgotPasswordPage;
