import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import global from '../../../store/actions/global';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import EventItem from '../../../components/Pages/Events/EventItem';
import { Modal } from 'antd';

const ListEvents = ({ dispatch, events }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(global.getData({ key: 'events', url: '/events'}));
  }, []);

  const showDeleteModal = (event) => { 
    Modal.confirm({
      title: 'Silme işlemi',
      icon: <ExclamationCircleOutlined />,
      content: `${event.title} adlı etkinliği silmek istiyor musunuz ?`,
      okText: 'Sil',
      cancelText: 'İptal Et',
      onOk() {
        handleDelete(event.id);
      },
      onCancel() {
        setModalVisible(false);
      }
    });
  }
  const handleDelete = (id) => {
    dispatch(global.deleteData({ endpoint: '/events', id }));
    setModalVisible(false);
  };

  return (
    <div className="ListEvents section">
      {events.data && events.data.map(event => 
        <EventItem key={event.id} event={event} showDeleteModal={showDeleteModal} />
      )}
    </div> 
  );
};

const mapStateToProps = (state) => ({ events: state.global.events });
export default connect(mapStateToProps, null)(ListEvents);
