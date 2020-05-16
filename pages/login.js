import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import { Input, Form, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { auth } from '../store/actions';
import AuthProxy from '../proxies/AuthProxy';
import { route } from 'next/dist/next-server/server/router';
import firebase from '../plugins/firebase';

const Login = ({ router, dispatch, user }) => {
  
  const [loading, setLoading] = useState(false);

  const onFinish = (form) => {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(form.username, form.password).then(() => {
      setLoading(false);
      router.push('/dashboard');
    }).catch(err => {
      setLoading(false);
      message.error(err.message);
    });
  };
  
  useEffect(() => {
    new AuthProxy().checkLogin().then(user => {
      if (user) {
        router.push('/dashboard');
      } else {
        console.log("User falan yok");
      }
    });
  },[]);

  return (
    <div className="Login page d-flex j-center a-center">
      <div className="LoginForm d-flex fd-column j-center a-center">
        <div className="Logo">
          <img src="/static/img/logo.svg" />
        </div>
        <h1 className="text-bold">Marmara Üniversitesi İletişim Kulübü</h1>
        <Form className="text-center margin-t-4xl" onFinish={(form) => onFinish(form)}>
          <Form.Item name="username">
            <Input placeholder="Kullanıcı Adı" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="password">
            <Input type="password" placeholder="Parola" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = ({ user }) => ({ user });
export default withRouter(connect(mapStateToProps, null)(Login));