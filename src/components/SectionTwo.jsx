import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BikePic from "../assets/images/otherBike.png";

const SectionTwo = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const OtherBikeData = [
    {
      image: BikePic,
      bikeType: "Hybrid Bikes",
    },

    {
      image: BikePic,
      bikeType: "Fixie Bikes",
    },

    {
      image: BikePic,
      bikeType: "Folding Bikes",
    },

    {
      image: BikePic,
      bikeType: "Mount Bikes",
    },

    {
      image: BikePic,
      bikeType: "City Bikes",
    },
  ];

  return (
    <section className="section-two">
      <div className="custom-container container">
        <header>
          <div>Other Type Of Bikes</div>
        </header>

        <Carousel arrows={false} responsive={responsive}>
          {/* {OtherBikeData.map((data, index) => {
            return (
              <div key={index + 1} className="other-bike-type-wrapper">
                <div className="other-bike-type-card">
                  <div className="text-center">
                    <img
                      className="img-fluid other-bike-image"
                      src={data.image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="bike-type">{data.bikeType}</div>
              </div>
            );
          })} */}
          <div className="other-bike-type-wrapper active">
            <div className="other-bike-type-card">
              <div className="text-center">
                <img
                  className="img-fluid other-bike-image"
                  src={OtherBikeData[0].image}
                  alt=""
                />
              </div>
            </div>
            <div className="bike-type">{OtherBikeData[0].bikeType}</div>
          </div>

          <div className="other-bike-type-wrapper">
            <div className="other-bike-type-card">
              <div className="text-center">
                <img
                  className="img-fluid other-bike-image"
                  src={OtherBikeData[1].image}
                  alt=""
                />
              </div>
            </div>
            <div className="bike-type">{OtherBikeData[1].bikeType}</div>
          </div>

          <div className="other-bike-type-wrapper">
            <div className="other-bike-type-card">
              <div className="text-center">
                <img
                  className="img-fluid other-bike-image"
                  src={OtherBikeData[2].image}
                  alt=""
                />
              </div>
            </div>
            <div className="bike-type">{OtherBikeData[2].bikeType}</div>
          </div>

          <div className="other-bike-type-wrapper">
            <div className="other-bike-type-card">
              <div className="text-center">
                <img
                  className="img-fluid other-bike-image"
                  src={OtherBikeData[3].image}
                  alt=""
                />
              </div>
            </div>
            <div className="bike-type">{OtherBikeData[3].bikeType}</div>
          </div>

          <div className="other-bike-type-wrapper">
            <div className="other-bike-type-card">
              <div className="text-center">
                <img
                  className="img-fluid other-bike-image"
                  src={OtherBikeData[4].image}
                  alt=""
                />
              </div>
            </div>
            <div className="bike-type">{OtherBikeData[4].bikeType}</div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SectionTwo;
