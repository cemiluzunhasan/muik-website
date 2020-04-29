import React, { useState } from 'react';
import moment from 'moment';
import { Radio } from 'antd';
// import { database } from '../../plugins/firebase';
import { withRouter } from 'next/router';

const Blog = ({ router }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Corona virüsü neler taşıyor',
      type: 'Sports',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 2,
      title: 'Corona virüsü neler taşıyor',
      type: 'Sports',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 3,
      title: 'Corona virüsü neler taşıyor',
      type: 'Sports',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 4,
      title: 'Corona virüsü neler taşıyor',
      type: 'Sports',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 5,
      title: 'Corona virüsü neler taşıyor',
      type: 'Sports',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 1,
      title: 'Corona virüsü neler taşıyor',
      type: 'Social Responsibility',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 2,
      title: 'Corona virüsü neler taşıyor',
      type: 'Culture',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 3,
      title: 'Corona virüsü neler taşıyor',
      type: 'Culture',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 4,
      title: 'Corona virüsü neler taşıyor',
      type: 'Arts',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 5,
      title: 'Corona virüsü neler taşıyor',
      type: 'Meetup',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 1,
      title: 'Corona virüsü neler taşıyor',
      type: 'Sports',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 2,
      title: 'Corona virüsü neler taşıyor',
      type: 'Meetup',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 3,
      title: 'Corona virüsü neler taşıyor',
      type: 'Communication',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 4,
      title: 'Corona virüsü neler taşıyor',
      type: 'Sports',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    },
    {
      id: 5,
      title: 'Corona virüsü neler taşıyor',
      type: 'Arts',
      description: 'Corona virüsü başlıklarını sizin için listeledik. Bir göz atın :)',
      img: '/static/img/blog.jpg'
    }
  ]);
  const [filters, setFilters] = useState(['All', 'Sports', 'Arts', 'Culture', 'Communication', 'Meetup', 'Social Responsibility']);
  const [selectedFilter, setSelectedFilter] = useState('all');
  // useEffect(() => {
  //   database.on('value', snapshot => {
  //     setPosts(Object.values(snapshot.val()));
  //   });
  // }, []);

  const onChangeFilter = (e) => {
    setSelectedFilter(e.target.value.toLowerCase());
  }

  const goToPost = (id) => {
    router.push(`/blog/${id}`);
  }

  return (
    <div className='Blog page'>
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
        { posts.filter((post) => selectedFilter === 'all' || post.type.toLowerCase() === selectedFilter).map((post, key) => (
          <div className="BlogItem" key={key} onClick={() => goToPost(post.id)}>
            <img src={post.img} className="PostBanner" />
            <div className="PostTag bg-pink text-white">{post.type}</div>
            <h1 className="PostHeader text-bold">{post.title}</h1>
            <p className="PostDescription">{post.description}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Blog);
