
import moment from 'moment';
import { Row } from 'antd';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';

// TODO: Buradaki "yapıldı yazısı geçmiş ya da geleceğe göre set edilecek. Moment kullanılabilir"

const EventItem = ({ event }) => {

  return (
    <div className="EventItem">
      <img className="EventImage" src={event.image} />
      <div className="EventBody">
        <div className="full-content">
          <h1 className="text-bold text-xl margin-t-sm">{event.name}</h1>
          <Row className="margin-t-lg">
            <div className="EventCategory d-iflex j-center a-center bg-pink text-white text-bold">{event.category}</div>
            <span className="EventDateContainer d-iflex a-center">
              <CalendarOutlined className="EventIcon" style={{fontSize: 18}} />
              <span className="EventDate">{event.date}</span>
            </span>
          </Row>
          <Row className="margin-t-lg">
            <p className="text-sm">{event.text}</p>
          </Row>
          <Row className="margin-t-lg">
            <FieldTimeOutlined className="EventIcon" style={{fontSize: 18}} />
            <span className="EventDate">Yapıldı</span>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default EventItem;