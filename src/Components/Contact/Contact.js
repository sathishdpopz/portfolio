import React from "react";
import "./Contact.scss";
import { ArrowBack } from "@material-ui/icons";
import { Element, Link } from "react-scroll";

function Contact() {
  return (
    <Element className="contact" id="contact">
      <div className="contact__link">
        <Link to="home" smooth={true} duration={400}>
          <ArrowBack className="arrow" />
        </Link>
      </div>
      <div className="inputs">
        <h1>Contact us</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" className="message" />
        <button>Send</button>
      </div>
    </Element>
  );
}

export default Contact;
