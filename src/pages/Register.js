import {Card, Col, Row} from 'antd';
import RegistrationForm from '../forms/RegistrationForm';
import React from 'react';
import MainLayout from '../layout/main';

const RegisterPage = () => (
  <MainLayout showMenu={false}>
    <Row>
      <Col md={{span: 16, offset: 4}} lg={{span: 8, offset: 8}}>
        <Card title="Registration">
          <RegistrationForm/>
        </Card>
      </Col>
    </Row>
  </MainLayout>
);

export default RegisterPage;
