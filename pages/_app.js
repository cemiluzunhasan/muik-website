// import App from 'next/app'
import 'antd/dist/antd.css';
import '../styles/main.less';
import { Layout } from 'antd';
import { MuikHeader, MuikFooter, MuikSider } from '../components/Layout';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
import store from '../store';
const { Header, Sider, Content, Footer } = Layout;

const MyApp  = ({ Component, pageProps, router }) => {
  const { route } = router;
  return (
    <Provider store={store}>
      <Layout>
        <Header>
          <MuikHeader />
        </Header>
        {!route.includes('/dashboard') ? 
          <Content>
            <Component {...pageProps} />
          </Content>
          :
          <Layout>
            <Sider className="Sider">
              <MuikSider />
              <LogoutOutlined />
            </Sider>
            <Content>
              <div className="DashboardContainer page">
                <Component {...pageProps} />
              </div>
            </Content>
          </Layout>
        }
        {(!route.includes('/dashboard') || !route.includes('/login')) &&
        <Footer>
          <MuikFooter />
        </Footer>
        }
      </Layout>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default withRouter(MyApp);
