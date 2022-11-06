import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #ffeded;
  height: 100px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content:center;
  /* z-index: 10; */
  border-bottom: 4px solid #b4b4b4;
  /* border: 3px solid red; */
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  @media screen and (max-width: 460px) {
    padding: 0;
    }
`

export const NavLink = styled(Link)`
  height: 100%;
  color: #3d2c2c;
  font-size: 24px;
  font-weight: 700;

  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0 2rem;
  /* border: 3px solid red; */

  @media screen and (max-width:520px) {
    font-size: 	0.875rem;
  }
  @media screen and (max-width:360px) {
    font-size: 14px;
  }
`;
