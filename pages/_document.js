import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <title>MÜİK</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,600i,700,800&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument