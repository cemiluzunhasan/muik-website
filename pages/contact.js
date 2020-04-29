import { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';

const Contact = () => {
  const [location] = useState([40.986099, 29.053600]);

  useEffect(() => {
    var mymap = L.map('map').setView(location, 11);
    var marker = L.marker(location).addTo(mymap);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiY2VtaWx1enVuaGFzYW4iLCJhIjoiY2sxYzRheTBmMDhkczNicnlwbDFsZ2RrdSJ9.w8f71HWuvzQ4FJiqPOxP8w'
    }).addTo(mymap);
    
    marker.bindPopup("Marmara Üniversitesi İletişim Kulübü");
  },[]);
  const { TextArea } = Input;

  return (
    <div className="Contact page">
      <div className="ContactBanner">
        <div className="full-content">
          <h1 className="text-white text-header text-bold">Get In Touch</h1>
          <p className="text-white text-xl">Don't be shy. Give us a call or drop us a line.</p>
          <p className="text-white text-xl">Let's make some magic together.</p>
        </div>
      </div>
      <div className="full-content auto-height">
        <div className="ContactForm">
          <Row>
            <Col span={15} className="ContactFormColumn">
              <Row align="middle" justify="space-between" className="margin-b-4xl">
                <h1 className="text-bold">Send a Message</h1>
                <img src="/static/icons/mail.svg" />
              </Row>
              <Row gutter={32} className="margin-b-xl">
                <Col span={12}>
                  <Input size="large" placeholder="Adınız" prefix={<UserOutlined />} />
                </Col>
                <Col span={12}>
                  <Input size="large" placeholder="Soyadınız" prefix={<UserOutlined />} />
                </Col>
              </Row>
              <Row gutter={32} className="margin-b-xl">
                <Col span={12}>
                  <Input size="large" placeholder="Email Adresi" prefix={<MailOutlined />} />
                </Col>
                <Col span={12}>
                  <Input size="large" placeholder="Telefonunuz" prefix={<PhoneOutlined />} />
                </Col>
              </Row>
              <Row className="margin-b-xl">
                <TextArea rows={6} placeholder="Size nasıl yardımcı olabiliriz ?"  />
              </Row>
              <Row align="middle" justify="end">
                <Button type="primary" icon={<SendOutlined />} className="btn-submit">
                  Gönder
                </Button>
              </Row>
            </Col>
            <Col span={9} className="ContactInfoColumn">
              <h1 className="text-white text-bold margin-b-4xl">Contact Info</h1>
              <Row className="margin-b-xxl">
                <img src="/static/icons/phone.svg" className="ContactInfoIcon" />
                <p className="text-white">+90 534 727 52 46</p>
              </Row>
              <Row className="margin-b-xxl">
                <img src="/static/icons/email.svg" className="ContactInfoIcon" />
                <p className="text-white">cmluzunhasan@gmail.com</p>
              </Row>
              <Row className="full-height">
                <Col span={24}>
                  <div className="MapContainer">
                    <div id="map" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>    
  );
};

export default Contact;