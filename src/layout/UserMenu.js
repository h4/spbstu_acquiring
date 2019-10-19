import React from 'react';
import {Button, Dropdown, Menu} from 'antd';
import {Link} from 'react-router-dom';

const menu = (
  <Menu>
    <div style={{padding: "5px 12px"}}>
      John Doe
    </div>
    <Menu.Divider />
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
  return <Dropdown overlay={menu} placement="bottomRight">
    <Button size="large" shape="circle" icon="user" />
  </Dropdown>
};

export default UserMenu;
