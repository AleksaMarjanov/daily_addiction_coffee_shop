import React from "react";
import { Navbar, About, Menu, Footer, Contact, Events, Gallery } from "../components";
import { ThemeProvider } from "next-themes";

const Home = () => {
  return (
      <div className="font-poppins">
        <Navbar />
        {/* <About />
        <Events />
        <Menu />
        <Contact />
        <Footer /> */}
      </div>
  );
};

export default Home;
