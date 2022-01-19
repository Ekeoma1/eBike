import React from "react";
import Lottie from "react-lottie";
import RiderAnimation from "../lotties/60019-adidas-rider.json";

const SelectedBike = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: "1",
    animationData: RiderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="selected-bike-section">
      <div className="custom-container container">
        <div className="row align-items-center gap-lg-0 gap-5">
          <div className="col-lg">
            <div className="selected-bike-card">
              <Lottie options={defaultOptions} height={300} width={300} />
              <div className="price-details">
                <div className="section-one-card-divider mb-2"></div>
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <div className="price-word">Price</div>
                    <div className="price">&#36;750</div>
                  </div>
                  <div>
                    <button className="pri-btn">Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="selected-bike-details">
              <h3>Hybrid Bikes</h3>
              <div className="selected-bike-desc">
                Dummy Text progressive, and affordable healthcare, accessible on
                mobile and online for everyone. To us, it’s not just work. We
                take pride in the solutions we deliver
              </div>

              <button className="sec-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedBike;
