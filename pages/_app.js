import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/container/Footer";
import Banner from "../src/container/Banner";
import Head from "next/head";
import SEO from "@bradgarropy/next-seo";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <>
       <Head>
        <SEO
          title="Daily Addiction Coffe House, Best Coffee made by Experts"
          description="Welcome to Daily Addiction Coffee House, the best coffee shop in Williston. We offer a wide selection of specialty coffee drinks, pastries, and sandwiches made with locally sourced ingredients. Come visit us and experience the warm, inviting atmosphere of our coffee shop. We can't wait to serve you!"
          keywords={[
            "best coffee shop in Williston",
            "coffee",
            "breakfast",
            "espresso",
            "latte",
            "Williston, North Dakota",
            "cappuccino",
            "shop",
            "58801"
          ]}
        />
      </Head>
      <div className="">
        <Navbar />
        <Banner />
        <Component {...pageProps} />
        <Footer />
        {/* <Script>
          <script
            src="https://www.google.com/recaptcha/api.js" async defer
          ></script>
        </Script> */}
      </div>
    </>
  );
}

export default MyApp;
