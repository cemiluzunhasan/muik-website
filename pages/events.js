import { useState } from 'react';
import { Row, Col } from 'antd';
import events from '../data/events';
import EventItem from '../components/Pages/Events/EventItem';

const Events = () => {
  const [data, setDataOne] = useState({
    name: '',
    date: '',
    category: '',
  });

  const setData = (key, value) => {
    
  };

  return (
    <div className="Events page">
      <div className="SearchBar">
        <div className="full-content">
          <Row>
            <Col span={24}>
              <h1 className="text-header text-white text-bold">Etkinlikler</h1>
              <h3 className="text-white">Yapılan etkinlikler hakkında bilgi edin</h3>
            </Col>
            {/* <Col span={5}>
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
            </Col> */}
          </Row>
        </div>
      </div>
      <div className="full-content text-center">
        {events.map(event => <EventItem key={event.id} event={event} />)}
      </div>
    </div>
  );
};

export default Events;