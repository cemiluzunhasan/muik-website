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

  const openTab = (url) => {
    window.open(url, '_blank');
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
          <Menu.Item key="blog" onClick={() => goTo('/blog')}>BLOG</Menu.Item>
          <Menu.Item key="events" onClick={() => goTo('/events')}>ETKİNLİKLER</Menu.Item>
          <Menu.Item key="contact" onClick={() => goTo('/contact')}>İLETİŞİM</Menu.Item>
        </Menu>
        <div className="HamburgerButton" onClick={openDrawer}>
          <span className="first" />
          <span className="second" />
          <span className="third" />
        </div>
        <div className="SocialMedia">
          <img src="/static/icons/social/instagram.svg" className="SocialIcon" onClick={() => openTab('https://www.instagram.com/miletisimkulubu/?hl=tr')} />
          <img src="/static/icons/social/twitter.svg" className="SocialIcon" onClick={() => openTab('https://twitter.com/miletisimkulubu')} />
          <img src="/static/icons/social/facebook.svg" className="SocialIcon" onClick={() => openTab('https://www.facebook.com/miletisimkulubu')} />
          <img src="/static/icons/social/linkedin.svg" className="SocialIcon" onClick={() => openTab('https://www.linkedin.com/company/marmarailetisim/')}/>
        </div>
        <HamburgerMenu isVisible={isVisible} onClose={onClose} />
      </div>
    </div>
  )
};

export default withRouter(MuikHeader);