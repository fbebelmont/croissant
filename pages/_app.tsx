import type { AppProps } from 'next/app'
import Image from 'next/image'

import '../styles/app.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="layout__background">
        <div className="layout__overlay"></div>
        <Image
          className="layout__img"
          src="/images/croissant_bg.jpg"
          alt="Arrière plan Croissant"
          layout="fill"
        />
      </div>
      <Component {...pageProps} />
    </>
    
    )
}

export default MyApp