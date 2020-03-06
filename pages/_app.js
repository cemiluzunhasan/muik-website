// import App from 'next/app'
import 'antd/dist/antd.css';
import '../styles/main.less';

import { Layout } from 'antd';
import { MuikHeader, MuikFooter } from '../components/Layout';

const { Header, Content, Footer } = Layout;

const MyApp  = ({ Component, pageProps }) => (
  <Layout>
    <Header>
      <MuikHeader />
    </Header>
    <Content>
      <Component {...pageProps} />
    </Content>
    <Footer>
      <MuikFooter />
    </Footer>
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
