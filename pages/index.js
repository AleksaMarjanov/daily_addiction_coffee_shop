import React from "react";
import { Navbar, Footer } from "../src/components";
import { ThemeProvider } from "next-themes";
import { About, Contact, Events, Menu, Header } from "../src/container";

const Home = () => {
  return (
      <div className="font-poppins">
        <Navbar />
        <Header />
        <About />
        <Events />
        <Menu />
        <Contact/>
        <Footer />
      </div>
  );
};

export default Home;
