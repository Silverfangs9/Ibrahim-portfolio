import React from "react";
import {  AiOutlineMail, AiFillHtml5 } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { SiJavascript, SiPython, SiReact } from "react-icons/si";
import { IconContext } from "react-icons";
import { DiCss3Full } from "react-icons/di";

import {
  Bodysty,
  Gap,
  Ptag,
  Iconsty,
  H1sty,
  // Arrowsty,
  ContainLeft,
  IconStack,
  ContainRight,
  ContainerWrapper
} from "./Body.styles";

const Bdy = () => {
  return (
    <>
      <Bodysty>
        <ContainerWrapper>
        <ContainLeft>
          <div className="container-left">
            <h1>IBRAHIM DOBA</h1>
            <Gap>
              <h3 className="spread">Front End Developer</h3>
            </Gap>
            <Ptag>
              <p className="P-class">
                Interested in working with me?
                <a className="A-class" href="/contact">
                  Get in touch!
                </a>
              </p>
            </Ptag>
            <div className="icons">
              <IconContext.Provider value={{ size: "3rem", color: '3D2C2C' }}>
                <Iconsty>
                  <a  href="https://twitter.com/DobaIbrahim"> <BsTwitter className="twitter" /></a>
                  <a href="https://www.instagram.com/silverfangs_/" ><BsInstagram className="insta" /></a>
                  <a href="http://ibrahimdoba55@gmail.com" ><AiOutlineMail className="gmail" /></a>
                </Iconsty>
              </IconContext.Provider>
            </div>

            {/* <div className="arrow"> */}
            {/* <Arrowsty>
              <AiOutlineArrowDown size="2rem" color="red" />
            </Arrowsty>
            </div> */}
          </div>
        </ContainLeft>
        <ContainRight>
          <div className="container-right">
            <div className="icon-stack">
              <H1sty>
                <span>Tech Skills</span>
              </H1sty>
              <IconContext.Provider value={{ size: "3rem" }}>
                <IconStack>
                  <AiFillHtml5></AiFillHtml5>
                  <DiCss3Full></DiCss3Full>
                  <SiJavascript></SiJavascript>
                  <SiReact></SiReact>
                  <SiPython></SiPython>
                </IconStack>
              </IconContext.Provider>
            </div>
          </div>
        </ContainRight>
        </ContainerWrapper>
      </Bodysty>
    </>
  );
};

export default Bdy;
