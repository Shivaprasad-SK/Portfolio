import Link from "next/link";
import React from "react";
import style from "../styles/header.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function header() {
  return (
    <header className={style.header}>
      <div className={`container  ${style.container}`}>
        <h5>Hello I&lsquo;m</h5>
        <h1>Shivaprasad K</h1>
        <h5 className="text-light">Data Scientist</h5>
        <div className={style.cta}>
          <a className="btn" href={"/assets/cv.pdf"}>
            Download CV
          </a>
          <a href={"#contact"}>
            <span className="btn btn-primary">Let&lsquo;s Talk</span>
          </a>
        </div>
        <a href={"#contact"} className={style.scrollDown}>
          Scroll Down
        </a>

        <div className={style.socials}>
          <Link href={"https://www.linkedin.com/in/shivaprasad-k-32b451289/"}>
            <LinkedInIcon />
          </Link>
          <Link href={"https://github.com/Shivaprasad-SK?tab=repositories/"}>
            <GitHubIcon />
          </Link>
          <Link href={"https://www.instagram.com/shivaprasad_k_gowda/"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default header;
