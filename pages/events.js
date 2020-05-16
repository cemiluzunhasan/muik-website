import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { Row, Col, Empty } from 'antd';
import EventItem from '../components/Pages/Events/EventItem';
import Loading from '../components/UIComponents/Loading';
import { global } from '../store/actions';

const Events = ({ router, dispatch, events }) => {
  
  useEffect(() => {
    dispatch(global.getData({ url: '/events', key: 'events' }));
  }, []);

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
      { events.loading ? 
        <Loading text="Etkinlikler yükleniyor" />
        :
        <div className="full-content text-center">
        {events.data ? events.data.map(event => <EventItem key={event.id} event={event} />)
            :
            <Empty description="Gösterilecek etklinlik yok" />
        }
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({ events: state.global.events });
export default withRouter(connect(mapStateToProps, null)(Events));