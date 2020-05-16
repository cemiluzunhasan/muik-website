
import { DeleteOutlined } from '@ant-design/icons';

const Article = ({ article, onClick, showDeleteModal }) => {
  return (
    <div className='BlogItem' onClick={() => onClick(article.id)}>
      <img src={article.image} className='PostBanner' />
      <div className='PostTag bg-pink text-white'>{article.category}</div>
      <div className="ArticleTitle d-flex j-between a-center">
        <h1 className='PostHeader text-bold'>{article.title}</h1>
        { showDeleteModal && 
          <div className="EditIcons">
            <DeleteOutlined style={{ fontSize: 18, position: 'relative', right: 10 }} className="DeleteIcon" onClick={() => showDeleteModal(article)} />
          </div>
        }
      </div>
      <p className='PostDescription'>{article.description}</p>
    </div>
  );
};

export default Article;
