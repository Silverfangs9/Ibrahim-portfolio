import React from "react";
import { Nav, NavContainer, NavLink } from "./Navbar.styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
        <NavLink to="/project">PROJECTS</NavLink>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        {/* <div className="imgs">
        </div> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
