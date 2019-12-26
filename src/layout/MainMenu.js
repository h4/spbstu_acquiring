import React from 'react';
import {Icon, Menu, Layout} from 'antd';

import user from '../state/user';
import {Link} from 'react-router-dom';

const {Sider} = Layout;

const LoggedItems = [
  <Menu.Item key="1">
    <Link to="/payment"><Icon type="credit-card"/> Payment</Link>
  </Menu.Item>,
  <Menu.Item key="2">
    <Link to="/inquiries"><Icon type="file"/> Inquiries</Link>
  </Menu.Item>,
  <Menu.Item key="3">
    <Link to="/history"><Icon type="calendar"/> History</Link>
  </Menu.Item>,
];

const AnonymousItems = [
  <Menu.Item key="1">
    <Link to="/payment"><Icon type="credit-card"/> Payment</Link>
  </Menu.Item>,
  <Menu.Divider key="-"/>,
  <Menu.Item key="2">
    <Link to="/login"><Icon type="user"/> Login</Link>
  </Menu.Item>
];

const MainMenu = () => (
  <Sider style={{background: '#FFF'}}>
    <Menu
      mode="inline"
      style={{height: '100%'}}
    >
      {(user.isLogged && LoggedItems) || AnonymousItems}
    </Menu>
  </Sider>
);

export default MainMenu;