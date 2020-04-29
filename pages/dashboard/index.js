
import { useEffect } from 'react';
import { withRouter } from 'next/router';
import firebase from '../../plugins/firebase';
import AuthProxy from '../../proxies/AuthProxy';

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