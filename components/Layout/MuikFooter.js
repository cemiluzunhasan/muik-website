import { withRouter } from 'next/router';
import { Row, Col } from 'antd';

const MuikFooter = () => {
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
        </Row>
      </div>
    </div>
  );
};

export default withRouter(MuikFooter);
