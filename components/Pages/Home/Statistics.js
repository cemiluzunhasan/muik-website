import { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'antd';

const Statistics = () => {
  const [members, setMembers] = useState(0);
  const [ref, setRef] = useRef(null);

  return (
    <div ref={ref} id="statistics" className="Statistics">
      <div className="full-content">
        <Row type="flex" justify="center" align="middle">
          <Col span={6}>
            <div className="StatisticsItem">
              <h1 className="StatNumber text-white text-center text-xxxl text-bold">300</h1>
              <h2 className="StatName text-white text-center">Üye Sayısı</h2>
            </div>
          </Col>
          <Col span={6}>
            <div className="StatisticsItem">
              <h1 className="StatNumber text-white text-center text-xxxl text-bold">300</h1>
              <h2 className="StatName text-white text-center">Üye Sayısı</h2>
            </div>
          </Col>
          <Col span={6}>
            <div className="StatisticsItem">
              <h1 className="StatNumber text-white text-center text-xxxl text-bold">300</h1>
              <h2 className="StatName text-white text-center">Üye Sayısı</h2>
            </div>
          </Col>
          <Col span={6}>
            <div className="StatisticsItem">
              <h1 className="StatNumber text-white text-center text-xxxl text-bold">300</h1>
              <h2 className="StatName text-white text-center">Üye Sayısı</h2>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Statistics;
