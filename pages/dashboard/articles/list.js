import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import global from '../../../store/actions/global';
import Article from '../../../components/Pages/Articles/Article';

const ListArticles = ({ dispatch, articles }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(global.getData({ key: 'articles', url: '/posts'}));
  }, []);

  const goToPost = (id) => {
    
  }

  const showDeleteModal = (article) => { 
    Modal.confirm({
      title: 'Silme işlemi',
      icon: <ExclamationCircleOutlined />,
      content: `${article.title} adlı makaleyi silmek istiyor musunuz ?`,
      okText: 'Sil',
      cancelText: 'İptal Et',
      onOk() {
        handleDelete(article.id);
      },
      onCancel() {
        setModalVisible(false);
      }
    });
  }
  const handleDelete = (id) => {
    dispatch(global.deleteData({ endpoint: '/posts', id }));
    setModalVisible(false);
  };
  
  
  return (
    <div className="ListArticles section">
      <div className="BlogItems text-left">
        { articles.data && articles.data.map(article => (
          <Article onClick={(id) => goToPost(id)} key={article.id} article={article} showDeleteModal={showDeleteModal} />
        ))}
      </div>
    </div> 
  );
}
const mapStateToProps = (state) => ({ articles: state.global.articles });
export default connect(mapStateToProps, null)(ListArticles);
