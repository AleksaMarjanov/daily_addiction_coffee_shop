import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/container/Footer";
import Banner from "../src/container/Banner";
import Head from "next/head";
import Script from "next/script";
import  emailjs  from '@emailjs/browser';

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <>
      <Head></Head>
      <div className="">
        <Navbar />
        <Banner />
        <Component {...pageProps} />
        <Footer />
        <Script>
          <script
            src="https://www.google.com/recaptcha/api.js" async defer
          ></script>
        </Script>
      </div>
    </>
  );
}

export default MyApp;
