import React, { useState, useEffect } from 'react';
import Router, { useRouter, withRouter } from 'next/router';
import { Menu } from 'antd';
import HamburgerMenu from '../UIComponents/HamburgerMenu';

const { SubMenu } = Menu;

const HeaderMenu = ({ router }) => {
  const [isVisible, setVisible] = useState(false);

  const openDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const goTo = (route) => {
    router.push(route);
  }

  return (
    <div className="HeaderMenu">
      <div className="full-content">
        <Menu mode="horizontal">
          <Menu.Item>
            <div className="logo" onClick={() => goTo('/')}>
              <img src="/static/img/logo.svg" />
            </div>
          </Menu.Item>
          <Menu.Item key="who-we-are" onClick={() => goTo('/about')}>BİZ KİMİZ</Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                KOMİTELERİMİZ
              </span>
            }
          >
            <Menu.ItemGroup>
              <Menu.Item key="setting:4">Spor İletişimi</Menu.Item>
              <Menu.Item key="setting:5">Sanat İletişimi</Menu.Item>
              <Menu.Item key="setting:6">Kültür</Menu.Item>
              <Menu.Item key="setting:7">İletişim A.</Menu.Item>
              <Menu.Item key="setting:8">Meetup</Menu.Item>
              <Menu.Item key="setting:9">Sosyal Medya</Menu.Item>
              <Menu.Item key="setting:10">Sosyal Sorumluluk</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item>BLOG</Menu.Item>
          <Menu.Item>ETKİNLİKLER</Menu.Item>
        </Menu>
        <div className="HamburgerButton" onClick={openDrawer}>
          <span className="first" />
          <span className="second" />
          <span className="third" />
        </div>
        <HamburgerMenu isVisible={isVisible} onClose={onClose} />
      </div>
    </div>
  )
};

export default withRouter(HeaderMenu);
