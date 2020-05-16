
import { useEffect } from 'react';
import { withRouter } from 'next/router';
import AuthProxy from '../../proxies/AuthProxy';
import 'react-quill/dist/quill.snow.css';

const Dashboard = ({ router }) => {
  useEffect(() => {
    new AuthProxy().checkLogin().then(user => {
      if (user) {
        router.push('/dashboard/articles/add');
      } else {
        router.push('/login');
      }
    })
  }, []);
  return (
    <div className="Dashboard page">
      Dashboard
    </div>
  );
};

export default withRouter(Dashboard);