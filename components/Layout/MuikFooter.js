import React from 'react';
import { withRouter } from 'next/router';
import { Row, Col } from 'antd';

class MuikFooter extends React.Component {
  
  state = {
    location: [40.986099, 29.053600]
  };

  componentDidMount() {
    var mymap = L.map('mapid').setView([40.986099, 29.053600], 11);
    
    var marker = L.marker([40.986099, 29.053600]).addTo(mymap);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiY2VtaWx1enVuaGFzYW4iLCJhIjoiY2sxYzRheTBmMDhkczNicnlwbDFsZ2RrdSJ9.w8f71HWuvzQ4FJiqPOxP8w'
    }).addTo(mymap);
    
    marker.bindPopup("Marmara Üniversitesi İletişim Kulübü");
  }
  render() {
    return (
      <div className="MuikFooter">
        <div className="full-content">
          <Row>
            <Col span={5}>
              <Row>
                <Col span={5}>
                  <img className="FooterLogo full-width" src="/static/img/logo-grey.png" />
                </Col>
                <Col span={19}>
                  <h4 className="text-white text-center">Marmara Üniversitesi İletişim Kulübü</h4>
                </Col>
              </Row>
              <p className="text-grey margin-t-lg">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
            </Col>
            <Col span={5} offset={2}>
              <h4 className="text-white margin-b-lg">Hızlı Menü</h4>
              <p className="FooterMenuItem">Ana Sayfa</p>
              <p className="FooterMenuItem">Hakkımızda</p>
              <p className="FooterMenuItem">Komitelerimiz</p>
              <p className="FooterMenuItem">Blog</p>
              <p className="FooterMenuItem">Etkinlikler</p>
            </Col>
            <Col span={5}>
              <h4 className="text-white margin-b-lg">İletişime Geç</h4>
              <div className="margin-b-md">
                <img className="footer-icon" src="/static/icons/email.svg" />
                <span className="margin-l-md text-grey">info@muik.com.tr</span>
              </div>
              <div className="margin-b-md">
                <img className="footer-icon" src="/static/icons/phone.svg" />
                <span className="margin-l-md text-grey">+90 (534) 727 52 46</span>
              </div>
              <div className="margin-b-md">
                <img className="footer-icon" src="/static/icons/address.svg" />
                <span className="margin-l-md text-grey">Eğitim mahallesi, Marmara Üniversitesi</span>
              </div>
            </Col>
            <Col span={5}>
              <h4 className="text-white margin-b-lg">Konum</h4>
              <div className="MapContainer">
                <div id="mapid" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(MuikFooter);
