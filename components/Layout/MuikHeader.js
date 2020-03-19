import React, { useState } from 'react';
import { withRouter } from 'next/router';
import { Menu } from 'antd';
import HamburgerMenu from '../UIComponents/HamburgerMenu';

const MuikHeader = ({ router }) => {
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
          <Menu.Item key="committies" onClick={() => goTo('/committies')}>KOMİTELERİMİZ</Menu.Item>
          <Menu.Item key="blog" onClick={() => goTo('/blog')}>BLOG</Menu.Item>
          <Menu.Item key="events" onClick={() => goTo('/events')}>ETKİNLİKLER</Menu.Item>
        </Menu>
        <div className="HamburgerButton" onClick={openDrawer}>
          <span className="first" />
          <span className="second" />
          <span className="third" />
        </div>
        <div className="SocialMedia">
          <img src="/static/icons/social/instagram.svg" className="SocialIcon" />
          <img src="/static/icons/social/twitter.svg" className="SocialIcon" />
          <img src="/static/icons/social/facebook.svg" className="SocialIcon" />
          <img src="/static/icons/social/linkedin.svg" className="SocialIcon" />
        </div>
        <HamburgerMenu isVisible={isVisible} onClose={onClose} />
      </div>
    </div>
  )
};

export default withRouter(MuikHeader);