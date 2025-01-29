import React from "react";
import style from "../styles/header.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <h5>Hello I'm</h5>
        <h1>Shivaprasad K</h1>
        <h5 className="text-light">Data Scientist</h5>
        <div className={style.cta}>
          <a className="btn" href="/assets/cv.pdf" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
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
