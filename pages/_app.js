// import App from 'next/app'
import 'antd/dist/antd.css';
import '../styles/main.less';

import { Layout } from 'antd';
import HeaderMenu from '../components/Layout/HeaderMenu';

const { Header, Content, Footer } = Layout;

const MyApp  = ({ Component, pageProps }) => (
  <Layout>
    <Header>
      <HeaderMenu />
    </Header>
    <Content>
      <Component {...pageProps} />
    </Content>
    <Footer>Created by Jamallo</Footer>
  </Layout>
)

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
