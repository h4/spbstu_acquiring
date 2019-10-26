import React from 'react';
import {Typography} from 'antd';

import MainLayout from '../layout/main';
import user from '../state/user';

const {Title} = Typography;

const LogoutPage = () => {
  user.logout();

  return <MainLayout showMenu={false}>
    <Title>Logout</Title>

    <p>You were logged out</p>
  </MainLayout>;
};

export default LogoutPage;
