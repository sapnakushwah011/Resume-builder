import React from "react";
import style from "../TemplateCss/Template2.module.css";
import { CalendarMonth } from "@mui/icons-material";

const Template2 = () => {
  const ProjectData = JSON.parse(sessionStorage.getItem("projects")) || [];
  const Education = JSON.parse(sessionStorage.getItem("educations")) || [];
  const storedTags = JSON.parse(sessionStorage.getItem("tags")) || [];
  const storedInterest = JSON.parse(sessionStorage.getItem("interests")) || [];
  const ExperienceData = JSON.parse(sessionStorage.getItem("experienceData")) || [];
  const Certificates = JSON.parse(sessionStorage.getItem("certificates")) || [];

  return (
    <>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.heading}>
            {sessionStorage.getItem("firstname")}{" "}
            {sessionStorage.getItem("lastName")}
          </div>
          <div className={style.roleHeading}>
            {sessionStorage.getItem("currentRole")}
          </div>
        </div>
        <div className={style.subHeadingBody}>
          <div className={style.subHeading}>
            {sessionStorage.getItem("address")} {sessionStorage.getItem("city")}{" "}
            {sessionStorage.getItem("pincode")}{" "}
            {sessionStorage.getItem("country")} |{" "}
            {sessionStorage.getItem("phone")} |{" "}
            {sessionStorage.getItem("email")} |{" "}
            {sessionStorage.getItem("linkedin")} |{" "}
            {sessionStorage.getItem("github")}
          </div>
        </div>

        {ExperienceData.length > 1 && (
          <div className={style.title}>Experience</div>
        )}
        {ExperienceData.map((experience, index) => (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className={style.subTitle}>
                {experience.jobTitle}
                <br /> {experience.company}
              </span>
              <span className={style.content}>
                {experience.expStartDate} - {experience.expEndDate}
              </span>
            </div>
            <div className={style.content}>
              <ul>
                <li>{experience.point1}</li>
                <li>{experience.point2}</li>
              </ul>
            </div>
          </>
        ))}

        {ProjectData.length > 1 && <div className={style.title}>Projects</div>}
        {ProjectData.map((project) => (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className={style.subTitle}>
                {project.projectTitle}
                <br />
                {project.projectName}
              </span>
              <span className={style.content}>
                {project.startDate} - {project.endDate}
              </span>
            </div>
            <div className={style.content}>
              <ul>
                <li>{project.aboutProject}</li>
              </ul>
            </div>
          </>
        ))}

        {Education.length > 1 && <div className={style.title}>Education</div>}
        {Education.map((education, index) => (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className={style.subTitle}>{education.title}</span>
              <span className={style.content}>{education.session}</span>
            </div>
            <div className={style.content}>
              {education.instituteName}
              <br />
              {education.percentage}
            </div>
          </>
        ))}

        {storedTags.length > 0 && <div className={style.title}>Skills</div>}
        <div className={style.content}>
          {storedTags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </div>

        {Certificates.length > 1 &&
        <div className={style.title}>Certificate/Achievement</div>
        }
         {Certificates.map((certificate, index) => (
          <div>
        <div className={style.content}>
          {certificate.certificateTitle}
        </div>
        <div className={style.content}>
          <CalendarMonth fontSize="0.9rem" />{" "}
          {certificate.startDate} - {certificate.endDate}
        </div>
        </div>
         ))}

        {storedInterest.length > 0 && <div className={style.title}>Interest</div>}
        <div className={style.content}>
          {storedInterest.map((interest, index) => (
            <li className={style.list} key={index}>{interest}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Template2;
