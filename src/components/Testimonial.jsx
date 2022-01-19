import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialImg from "../assets/images/preview.png";
import testimonialAtt from "../assets/images/Group.svg";
import Icons from "../components/Icons";
import testimonialAtt2 from "../assets/images/Group 10.svg";

const Testimonial = () => {
  const testimonialData = [
    {
      message:
        "Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      clientName: "Edward Newgate",
      clientOccupation: "Pro-Cycler",
    },

    {
      message:
        "Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      clientName: "Edward Newgate",
      clientOccupation: "Pro-Cycler",
    },

    {
      message:
        "Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      clientName: "Edward Newgate",
      clientOccupation: "Pro-Cycler",
    },

    {
      message:
        "Dummy Text patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      clientName: "Edward Newgate",
      clientOccupation: "Pro-Cycler",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <button
        className={` testimonial-dot ${active ? "active" : "inactive"}`}
        onClick={() => onClick()}
      ></button>
    );
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <button
          className={`testimonial-carousel-btn ${
            currentSlide === 0 ? "disable" : ""
          }`}
          onClick={() => previous()}
        >
          <Icons icon="left" />
        </button>
        <button className="testimonial-carousel-btn" onClick={() => next()}>
          <Icons icon="right" />
        </button>
      </div>
    );
  };

  return (
    <section className="testimonial-section">
      <div className="custom-container container">
        <Carousel
          arrows={false}
          showDots
          customButtonGroup={<ButtonGroup />}
          customDot={<CustomDot />}
          responsive={responsive}
        >
          {testimonialData.map((data, index) => {
            return (
              <div
                key={index + 1}
                className="testimonial-card d-flex align-items-center"
              >
                <img
                  className="testimonial-attachment"
                  src={testimonialAtt}
                  alt=""
                />
                <div>
                  <h3>What our customer are saying</h3>
                  <div className="border-line"></div>
                  <div className="row justify-content-center align-items-center mt-3">
                    <div className="col-lg-3">
                      <div>
                        <div
                          style={{ backgroundImage: `url(${TestimonialImg})` }}
                          className="testimonial-img mx-auto"
                        ></div>
                        <div className="client-name">{data.clientName}</div>
                        <div className="client-occupation">
                          {data.clientOccupation}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="client-testimony text-lg-start text-center">
                        {data.message}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <img className="testimonial-att-2" src={testimonialAtt2} alt="" />
    </section>
  );
};

export default Testimonial;
