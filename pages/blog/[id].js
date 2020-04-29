import { withRouter } from 'next/router';

const Post = ({ router }) => {
  const { id } = router.query;
  return (
    <div className="Post page">
      Blog post {id}
    </div>
  );
};

export default withRouter(Post);
