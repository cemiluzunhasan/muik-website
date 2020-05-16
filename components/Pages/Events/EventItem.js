import { Row } from 'antd';
import { CalendarOutlined, FieldTimeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

// TODO: Buradaki "yapıldı yazısı geçmiş ya da geleceğe göre set edilecek. Moment kullanılabilir"

const EventItem = ({ event, showDeleteModal }) => {

  return (
    <div className="EventItem">
      <img className="EventImage" src={event.image} />
      <div className="EventBody">
        <div className="full-content">
          <div className="EventTitle d-flex j-between a-center">
            <h1 className="text-bold text-xl margin-t-sm">{event.title}</h1>
            { showDeleteModal && 
            <div className="EditIcons">
              <DeleteOutlined style={{ fontSize: 18 }} className="DeleteIcon" onClick={() => showDeleteModal(event)} />
            </div>
            }
          </div>
          <Row className="margin-t-lg">
            <div className="EventCategory d-iflex j-center a-center bg-pink text-white text-bold">{event.category}</div>
            <span className="EventDateContainer d-iflex a-center">
              <CalendarOutlined className="EventIcon" style={{fontSize: 18}} />
              <span className="EventDate">{event.date}</span>
            </span>
          </Row>
          <Row className="margin-t-lg">
            <p className="text-sm">{event.description}</p>
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