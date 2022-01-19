import React from "react";
import HeroAttachment from "../assets/images/hero-attachment.png";
import SearchIcon from "@mui/icons-material/Search";
import Lottie from "react-lottie";
import HeaderAnimation from "../lotties/57535-helmet-requirement.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: "1",
    animationData: HeaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="home-hero">
      <div className="custom-container container">
        <img
          className="position-absolute start-0 d-lg-block d-none"
          src={HeroAttachment}
          alt=" "
        />
        <div className="row align-items-end hero-height">
          <div className="col-lg">
            <div className="hero-content mt-lg-0 mt-4">
              <h1>Your Bike Electric Update</h1>

              <div className="hero-desc">
                Dummy text progressive, and affordable healthcare, accessible on
                mobile and online for everyone
              </div>

              <div className="hero-form">
                <div className="hero-form-search-icon">
                  <SearchIcon />
                </div>
                <div>
                  <input
                    className="home-hero-input-box"
                    type="text"
                    placeholder="Search Bike or anything"
                  />
                </div>
                <button className="pri-btn">Find</button>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
