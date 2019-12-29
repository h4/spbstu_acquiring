import React from 'react';
import {Button, Divider, Dropdown, Menu} from 'antd';
import {Link} from 'react-router-dom';

import user from '../state/user';
import {useQuery} from '@apollo/react-hooks';
import {GET_ME} from '../services/queries/user';

const drawMenu = () => (
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
  const {loading, data} = useQuery(GET_ME);

  if (loading) return '...';
  if (data) {
    if (data.currentUser) {
      user.update(data.currentUser.name);

      return <Dropdown
        overlay={drawMenu()}
        placement="bottomRight">
        <Button size="large" shape="circle" icon="user"/>
      </Dropdown>
    } else {
      return [<Divider key='divider' type='vertical'/>, <Link key='link' to="/login">Login</Link>];
    }
  } else {
    return [<Divider key='divider' type='vertical'/>, <Link key='link' to="/login">Login</Link>];
  }
};

export default UserMenu;
