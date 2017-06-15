import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import menuConfig from './menuConfig';

const SubMenu = Menu.SubMenu;

function getMenus(menuArray, parentPath = '/') {
  return menuArray.map((item) => {
    const linkTo = parentPath + item.key;
    if (item.child) {
      return (
        <SubMenu
          key={linkTo}
          title={
            <span>
              {item.icon ? <Icon type={item.icon} /> : ''}
              <span>{item.name}</span>
            </span>
          }
        >
          {getMenus(item.child, `${linkTo}/`)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={linkTo}>
        {item.name}
      </Menu.Item>
    );
  });
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <Menu
          style={{ width: 240 }}
          defaultOpenKeys={['sub2', 'sub3']}
          mode={'inline'}
        >
         {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu> */}
          {
            getMenus(menuConfig)
          }
        </Menu>
      </div>
    );
  }
}

export default App;
