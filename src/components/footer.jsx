import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import style from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={style.container} id="footer">
      <a href="/" className={style.logo}>
        SHIVA
      </a>

      <div className={style.paramLink}>
        <a href="#" className={style.span}>
          Home
        </a>
        <a href="#about" className={style.span}>
          About
        </a>
        <a href="#experience" className={style.span}>
          Experience
        </a>
        <a href="#services" className={style.span}>
          Service
        </a>
        <a href="#contact" className={style.span}>
          Contact
        </a>
      </div>

      <div className={style.socials}>
        <a
          href="https://www.linkedin.com/in/shivaprasad-k-32b451289/"
          className={style.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/Shivaprasad-SK?tab=repositories"
          className={style.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/shivaprasad_k_gowda/"
          className={style.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className={style.copyright}>
        <small>
          &copy; {new Date().getFullYear()} SHIVA. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
