import React from "react";
import style from "../styles/footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
function footer() {
  return (
    <footer className={style.container} id="footer">
      <Link href="/">
        <span className={style.logo}>SHIVA</span>
      </Link>

      <div className={style.paramLink}>
        <Link href="#">
          <span className={style.span}>Home</span>
        </Link>
        <a href="#about">
          <span className={style.span}>About</span>
        </a>
        <a href="#experience">
          <span className={style.span}>Experience</span>
        </a>
        <a href="#services">
          <span className={style.span}>Service</span>
        </a>
        <a href="#contact">
          <span className={style.span}>Contact</span>
        </a>
      </div>
      <div className={style.socials}>
        <Link href="https://www.linkedin.com/in/shivaprasad-k-32b451289/">
          <span className={style.icon}>
            <LinkedInIcon />
          </span>
        </Link>
        <Link href="https://github.com/Shivaprasad-SK?tab=repositories">
          <span className={style.icon}>
            <GitHubIcon />
          </span>
        </Link>
        <Link href="https://www.instagram.com/shivaprasad_k_gowda/">
          <span className={style.icon}>
            <InstagramIcon />
          </span>
        </Link>
      </div>
    </footer>
  );
}

export default footer;
