import { useEffect } from 'react';
import { withRouter } from 'next/router';
import { Input, Form, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import firebase from '../../plugins/firebase';
import { route } from 'next/dist/next-server/server/router';
import {auth} from '../../store/actions';

const Login = ({ router, dispatch, uid }) => {
  const onFinish = (form) => {
    dispatch(auth.login(form));
  };
  useEffect(() => {
    uid && router.push('/dashboard');
  }, [uid])

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
            <Button type="primary" htmlType="submit">
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = ({ uid }) => ({ uid });
export default withRouter(connect(mapStateToProps, null)(Login));