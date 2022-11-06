import React from "react";
import { Contactsty, Consty, Iconsty, ContactWrapper } from "./contact.styles";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <>
      <Contactsty>
        <ContactWrapper>
          <h1 className="contactH1">Hello!</h1>
          <Consty>
            <span>Contact Me Here!</span>

            <IconContext.Provider value={{ size: "50px", color: "#3D2C2C" }}>
              <Iconsty>
                <a href="https://twitter.com/DobaIbrahim">
                  <BsTwitter className="twitter" />
                </a>
                <a href="https://www.instagram.com/silverfangs_/">
                  <BsInstagram className="insta" />
                </a>
                <a href="http://ibrahimdoba55@gmail.com">
                  <AiOutlineMail className="gmail" />
                </a>
              </Iconsty>
            </IconContext.Provider>
          </Consty>
        </ContactWrapper>
      </Contactsty>
    </>
  );
};

export default Contact;
