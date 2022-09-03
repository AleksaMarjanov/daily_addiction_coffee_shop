import React from "react";
import { Navbar } from "../src/components";
import { About, Contact, Events, Menu, Header, Footer, Banner } from "../src/container";

const Home = () => {
  return (
      <div className="font-poppins">
        <Navbar />
        <Banner />
        {/* <Header /> */}
        <About />
        <Events />
        <Menu />
        <Contact/>
        <Footer />
      </div>
  );
};

export default Home;
