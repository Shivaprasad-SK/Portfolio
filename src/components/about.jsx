import React from "react";
import style from "../styles/about.module.css";
import BadgeIcon from "@mui/icons-material/Badge";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ProfileCard from "./ProfileCard";
function about() {
  return (
    <section id="about" className={style.container}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={style.subContainer}>
        {/* <ProfileCard
          name="Shivaprasad K"
          title="Software Developer"
          handle="Shiva"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/assets/profile.jpg"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        /> */}
        <div className={style.profile}>
          <img className={style.profileImage} src={"/assets/profile.jpg"} />
        </div>
        {/* </TiltedCard> */}
        <div className={style.details}>
          <div className={style.cards}>
            <div className={style.card}>
              <BadgeIcon className={style.icon} />
              <h5>Project Experience</h5>
              <small>Skill based Courses</small>
            </div>
            <div className={style.card}>
              <FactCheckIcon className={style.icon} />
              <h5>Projects</h5>
              <small>4+ completed</small>
            </div>
          </div>
          <p className={style.para}>
            Hello, I am Shivaprasad K Data Scientist, having simple projects
            experience. I am from Mangalore, Karnataka. My educational
            background in computer science{" "}
          </p>
          <a href={"#contact"}>
            <button className="btn btn-primary">Let&apos;s talk</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
