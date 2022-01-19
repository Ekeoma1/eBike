import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SelectedBike";
import SectionTwo from "../components/SectionTwo";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default Home;
