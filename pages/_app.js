import '../styles/globals.css'
import React, {useState, useEffect } from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/container/Footer'
import Banner from '../src/container/Banner'

function MyApp({ Component, pageProps }) {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;


  return(
    <div>
      <Navbar />
      <Banner />
        <Component {...pageProps}/>
      <Footer />
    </div>
  )
}

export default MyApp
