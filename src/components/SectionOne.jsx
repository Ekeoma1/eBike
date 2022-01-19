import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Bike1 from "../assets/images/uek.png";
import Bike2 from "../assets/images/bek.png";
import Icons from "./Icons";

const SectionOne = () => {
  const salesData = [
    {
      header: "Universal eBike Kit",
      image: Bike1,
      price: 750,
    },
    {
      header: "Brampoton eBike Kit",
      image: Bike2,
      price: 750,
    },
    {
      header: "Additional eBike Kit",
      image: Bike1,
      price: 250,
    },
  ];
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          className={`section-one-carousel-btn ${
            currentSlide === 0 ? "disable" : ""
          }`}
          onClick={() => previous()}
        >
          <Icons icon="left" />
        </button>
        <button className="section-one-carousel-btn" onClick={() => next()}>
          <Icons icon="right" />
        </button>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="section-one">
      <div className="custom-container container">
        <Carousel
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          responsive={responsive}
        >
          {salesData.map((data, index) => {
            return (
              <div key={index + 1} className="section-one-card">
                <h5>{data.header}</h5>
                <div className="section-card-img text-center">
                  <img className="img-fluid" src={data.image} alt="" />
                </div>

                <div>
                  <div className="section-one-card-divider"></div>
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <div className="price-word">Price</div>
                      <div className="price">&#36;{data.price}</div>
                    </div>
                    <div>
                      <button className="pri-btn">Order</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default SectionOne;
