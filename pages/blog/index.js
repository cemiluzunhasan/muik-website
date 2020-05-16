import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'antd';
import { withRouter } from 'next/router';
import { global } from '../../store/actions';
import Loading from '../../components/UIComponents/Loading';

const Blog = ({ router, articles, dispatch }) => {
  
  const [filters, setFilters] = useState(['All', 'Sports', 'Arts', 'Culture', 'Communication', 'Meetup', 'Social Responsibility']);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    dispatch(global.getData({ url: '/posts', key: 'articles' }));
  }, []);

  const onChangeFilter = (e) => {
    setSelectedFilter(e.target.value.toLowerCase());
  }

  const goToPost = (id) => {
    router.push(`/blog/${id}`);
  }

  return (
    <div className='Blog page'>
    { articles.loading ? 
      <Loading text="Yazılar Yükleniyor" />
      :
      <React.Fragment>
        <div className="BlogBanner">
          <div className="full-content d-flex fd-column j-center">
            <div className="BlogHeader">
              <img src="/static/icons/sheet.svg" />
              <h1 className="text-white text-header text-bold">Yazılarımız</h1>
            </div>
            <p className="text-white text-lg">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      
        
        <div className="full-content">
          <div className="Filters d-flex j-center">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              { filters.map(filter => (
                  <Radio.Button key={filter} value={filter.toLowerCase()} onChange={(e) => onChangeFilter(e)}>{filter}</Radio.Button>
              ))}
            </Radio.Group>
          </div>
          <div className="BlogItems">
          { articles.data && articles.data.filter((article) => selectedFilter === 'all' || article.category.toLowerCase() === selectedFilter).map(article => (
            <div className="BlogItem" key={article.id} onClick={() => goToPost(article.id)}>
              <img src={article.image} className="PostBanner" />
              <div className="PostTag bg-pink text-white">{article.category}</div>
              <h1 className="PostHeader text-bold">{article.title}</h1>
              <p className="PostDescription">{article.description}</p>
            </div>
          ))}
          </div>
        </div>
      </React.Fragment>
    }
    </div>
  );
};
const mapStateToProps = (state) => ({ articles: state.global.articles });
export default withRouter(connect(mapStateToProps)(Blog));
