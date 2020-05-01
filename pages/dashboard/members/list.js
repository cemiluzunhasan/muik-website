import { useState ,useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { global } from '../../../store/actions';
import MemberCard from '../../../components/Pages/Dashboard/Members/MemberCard';

const ListMembers = ({ dispatch, members }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(global.getData({ key: 'members', url: '/members'}));
  }, []);

  const showDeleteModal = (member) => {
    
    Modal.confirm({
      title: 'Silme işlemi',
      icon: <ExclamationCircleOutlined />,
      content: `${member.name} adlı üyeyi silmek istiyor musunuz ?`,
      okText: 'Sil',
      cancelText: 'İptal Et',
      onOk() {
        handleDelete(member.id);
      },
      onCancel() {
        setModalVisible(false);
      }
    });
  }

  const handleDelete = (id) => {
    dispatch(global.deleteData({ endpoint: '/members', id }));
    setModalVisible(false);
  };

  return (
    <div className="ListMembers">
      { members.data ? members.data.map(member => (
        <MemberCard key={member.id} member={member} showDeleteModal={showDeleteModal} />
      )) : <div />}
    </div> 
  );
}

const mapStateToProps = (state) => ({ members: state.global.members });
export default connect(mapStateToProps, null)(ListMembers);
