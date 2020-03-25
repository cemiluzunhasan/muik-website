// import App from 'next/app'
import 'antd/dist/antd.css';
import '../styles/main.less';

import { useEffect } from 'react';
import firebase from 'firebase';
import { Layout } from 'antd';
import { MuikHeader, MuikFooter } from '../components/Layout';

const { Header, Content, Footer } = Layout;

const MyApp  = ({ Component, pageProps }) => {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyBFM5g2undrRNOKKMe2Q0GVSVBlv2FJAaA",
      authDomain: "muik-website.firebaseapp.com",
      databaseURL: "https://muik-website.firebaseio.com",
      projectId: "muik-website",
      storageBucket: "muik-website.appspot.com",
      messagingSenderId: "42631606001",
      appId: "1:42631606001:web:f6fe49fe8a7269ca7f0350",
      measurementId: "G-5NV1R6C7ST"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }, []);
  return (
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

export default MyApp;
