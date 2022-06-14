import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import Man from "../../asset/sathishPNG.png";
import React from "react";
import "./Main.scss";
import { IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>HEY THERE !</p>
            <h1>I AM SATHISH BABU</h1>
            <p> Create Art Director & Developer</p>

            <div className="icons">
              <a
                href="https://twitter.com/G6Sathish"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className={classes.root}>
                  <Twitter className="icon" />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/im._.sathish_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className={classes.root}>
                  <Instagram className="icon" />
                </IconButton>
              </a>
              <a
                href="https://www.facebook.com/sathish.aaron.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className={classes.root}>
                  <Facebook className="icon" />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/sathish-babu-g-6892b7233/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className={classes.root}>
                  <LinkedIn className="icon" />
                </IconButton>
              </a>
              <a
                href="https://in.pinterest.com/sathishdpopz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton className={classes.root}>
                  <Pinterest className="icon" />
                </IconButton>
              </a>
            </div>

            <div className="buttons">
              <Link to="work" smooth={true} duration={500}>
                <button>See My Work</button>
              </Link>
              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={Man} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
