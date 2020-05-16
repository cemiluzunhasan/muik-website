import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import { message } from 'antd';
import { Proxy } from '../../proxies';
import Loading from '../../components/UIComponents/Loading';

const Post = ({ router }) => {
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    new Proxy().getSingleData('/posts', id).then(data => {
      setPost(data);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      message.error(err);
    })
  }, [id]);

  return (
    <div className="Post page">
      { post && 
        <div className="BlogPost half-content">
          <h1 className="PostTitle text-bold">{post.title}</h1>
          <div className="PostBody" dangerouslySetInnerHTML={{__html: post.body}}></div>
        </div>
      }
      { loading && <Loading text="Yazı Yükleniyor" /> }
    </div>
  );
};

export default withRouter(Post);
