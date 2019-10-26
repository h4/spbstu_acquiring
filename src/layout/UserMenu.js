import React from 'react';
import {Button, Divider, Dropdown, Menu} from 'antd';
import {Link} from 'react-router-dom';

import user from '../state/user';

const menu = (
  <Menu>
    <div style={{padding: "5px 12px"}}>
      {user.fullName}
    </div>
    <Menu.Divider/>
    <Menu.Item key="0">
      <Link to="/settings">
        Settings
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/logout">
        Logout
      </Link>
    </Menu.Item>
  </Menu>
);

const UserMenu = (props) => {
  if (!user.isLogged) {
    return [<Divider key='divider' type='vertical' />, <Link key='link' to="/login">Login</Link>];
  }

  return <Dropdown overlay={menu} placement="bottomRight">
    <Button size="large" shape="circle" icon="user"/>
  </Dropdown>
};

export default UserMenu;
