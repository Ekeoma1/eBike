import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="custom-container container">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg">
            <div className="footer-logo d-flex align-items-end gap-2">
              <div className="f-logo-circle">B</div>
              <span className="f-logo-text">eBike</span>
            </div>

            <div className="footer-column-one-text">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </div>

            <div className="copyright-text">
              ©eBike 2021. All rights reserved
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-column-header">Company</div>
            <ul className="list-unstyled footer-link-list">
              <li>
                <Link to="#">Product</Link>
              </li>
              <li>
                <Link to="#">Bike Type</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="footer-column-header">Help</div>
            <ul className="list-unstyled footer-link-list">
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Contact Support</Link>
              </li>
              <li>
                <Link to="#">Instructions</Link>
              </li>
              <li>
                <Link to="#">How It Works</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
