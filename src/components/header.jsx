// import React from "react";
import style from "../styles/header.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Magnet from "./Magnet";

function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Shivaprasad K</h1>
        <h5 className="text-light">Web Developer</h5>
        <div className={style.cta}>
          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <a className="btn" href="assets/Shivaprasad_K.pdf" download>
              Download CV
            </a>
          </Magnet>
          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Talk
            </a>
          </Magnet>
        </div>
        <a href="#contact" className={style.scrollDown}>
          Scroll Down
        </a>
        <div className={style.socials}>
          <a
            href="https://www.linkedin.com/in/shivaprasad-k-32b451289/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Shivaprasad-SK?tab=repositories/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.instagram.com/shivaprasad_k_gowda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
