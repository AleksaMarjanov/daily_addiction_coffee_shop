import React from "react";
import { Navbar, About, Menu, Footer, Contact, Events, Gallery } from "../components";
import { ThemeProvider } from "next-themes";

const Home = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <About />
        <Events />
        <Menu />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
