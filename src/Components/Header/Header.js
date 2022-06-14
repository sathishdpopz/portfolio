import React, { useState } from "react";
import "./Header.scss";
import { Close, MenuOutlined } from "@material-ui/icons";
import { Link, Element } from "react-scroll";

export default function Header() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <Element className="home" id="home">
      <div className="header">
        <div className="header__logo">
          <h1>
            Sathi<span>sh</span>
          </h1>
        </div>

        <nav className={active ? "navbar active" : "navbar"}>
          <ul>
            <div className="closed">
              <Close className="close" onClick={showMenu} />
            </div>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="skill" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="work" smooth={true} duration={500}>
                Works
              </Link>
            </li>

            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="changer">
          <MenuOutlined className="menu" onClick={showMenu} />
        </div>
      </div>
    </Element>
  );
}
