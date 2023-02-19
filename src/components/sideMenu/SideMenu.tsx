/** @format */

import react from 'react';
import { sideMenuList } from './mockMenu';

import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';

export const SideMenu: React.FC = () => {
	return <Menu mode={"vertical"} 
  items={sideMenuList.map(
    item => ({label: item.title, icon: <GifOutlined />, key: item.title, children: item.subMenu.map(
      sm => ({
        label: sm.title,
        key: sm.title,
        icon:  <GifOutlined />,
        children: sm.subMenu.map(
          sms => ({
            label: sms,
            key: sms,
            icon:  <GifOutlined />
          })
        )
      })
    )}))}/>;
};
