import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Dorsa&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <div className="layout__wrapper">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument