import React from 'react';
import { Menu, Grid } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

function RightMenu() {
  const { md } = useBreakpoint();
  return (
  <Menu mode={md ? "horizontal" : "inline"}>
    <Menu.Item key="mail">
      <a href="">Sign In</a>
    </Menu.Item>
    <Menu.Item key="app">
      <a href="">Sign Up</a>
    </Menu.Item>
  </Menu>
  )
}

export default RightMenu;
