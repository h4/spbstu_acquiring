import React from 'react';
import MainLayout from '../layout/main';
import {Typography} from 'antd';

const { Title } = Typography;

const MainPage = () => (
  <MainLayout>
    <Title>Acquiring Service</Title>
    <p>Some description about service will be here</p>
  </MainLayout>
);

export default MainPage;