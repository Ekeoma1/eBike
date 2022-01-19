import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "./MobileNav";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [MobileNavTab, setMobileNavTab] = useState(true);

  const ToggleMobileNav = () => {
    setMobileNavTab(!MobileNavTab);
  };

  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <Link className={match ? "active" : " "} to={to} {...props}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <nav className="custom-container container">
      <div className="d-flex align-items-center justify-content-between">
        <img src={Logo} alt="logo" />
        <ul className="list-unstyled m-0 d-lg-flex gap-5 menu-item d-none">
          <li>
            <CustomLink to="">Products</CustomLink>
          </li>
          <li>
            <CustomLink to="bike-type">Bike Type</CustomLink>
          </li>
          <li>
            <CustomLink to="about">About Us</CustomLink>
          </li>
          <li>
            <CustomLink to="testimonial">Testimonial</CustomLink>
          </li>
          <li>
            <CustomLink to="contact">Contact</CustomLink>
          </li>
        </ul>

        <div className="d-lg-none">
          <button onClick={ToggleMobileNav}>
            <MenuIcon />
          </button>
        </div>
      </div>

      <div className={`mobile-nav d-lg-none  ${MobileNavTab && "d-none"}`}>
        <div>
          <button onClick={ToggleMobileNav}>
            <CloseIcon />
          </button>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
