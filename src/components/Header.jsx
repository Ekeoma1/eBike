import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="pt-5 pb-5">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
