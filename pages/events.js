import { useState } from 'react';
import { Row, Col, Input, Select, DatePicker } from 'antd';
import { eventCategories } from '../plugins/constants';

const Events = () => {
  const [data, setDataOne] = useState({
    name: '',
    date: '',
    category: '',
    status: '',
  });

  const setData = (key, value) => {
    
  };

  return (
    <div className="Events page">
      <div className="SearchBar">
        <div className="full-content">
          <Row>
            <Col span={5}>
              <Input placeholder="Etkinlik Adı" onChange={(e) => setData('name', e.target.value)} />
            </Col>
            <Col span={5} offset={1}>
              <Select defaultValue="Kategori Seçin" style={{ width: '100%'}}>
                { eventCategories.map((option) => (
                    <Select.Option value={option.value}>{option.name}</Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={5} offset={1}>
              <Input placeholder="Kategori" onChange={(e) => setData('category', e.target.value)} />
            </Col>
            <Col span={5} offset={1}>
              <DatePicker style={{width: '100%'}} placeholder="Tarih" locale="tr" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Events;