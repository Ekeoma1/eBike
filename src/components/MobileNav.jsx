import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

const MobileNav = () => {
  return (
    <>
      <div className="text-center mobile-menu-item">
        <div>
          <CustomLink to="">Products</CustomLink>
        </div>

        <div>
          <CustomLink to="bike-type">Bike Type</CustomLink>
        </div>

        <div>
          <CustomLink to="about">About Us</CustomLink>
        </div>

        <div>
          <CustomLink to="testimonial">Testimonial</CustomLink>
        </div>

        <div>
          <CustomLink to="contact">Contact</CustomLink>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
