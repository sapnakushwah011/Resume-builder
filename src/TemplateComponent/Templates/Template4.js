import React from "react";
import styles from "../TemplateCss/Template4.module.css";
import {
  CalendarMonth,
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

const Template4 = () => {
  const storedTags = JSON.parse(sessionStorage.getItem("tags")) || [];
  const storedInterest = JSON.parse(sessionStorage.getItem("interests")) || [];
  const ProjectData = JSON.parse(sessionStorage.getItem("projects")) || [];
  const ExperienceData = JSON.parse(sessionStorage.getItem("experienceData")) || [];
  const Certificates = JSON.parse(sessionStorage.getItem("certificates")) || [];
  const Education = JSON.parse(sessionStorage.getItem("educations")) || [];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.classRow}>
          <span className={styles.heading}>
            {sessionStorage.getItem("firstname")}{" "}
            {sessionStorage.getItem("lastName")}
          </span>
          <br />
          <span className={styles.subHeading}>
            {sessionStorage.getItem("currentRole")}
          </span>
          <br />
          <div>
            <span className={styles.contact}>
              <Phone fontSize="small" /> {sessionStorage.getItem("phone")}
            </span>
            <span className={styles.contact}>
              <Email fontSize="small" /> {sessionStorage.getItem("email")}
            </span>
            <span className={styles.contact}>
              <LocationOn fontSize="small" />{" "}
              {sessionStorage.getItem("address")}{" "}
              {sessionStorage.getItem("city")}{" "}
              {sessionStorage.getItem("pincode")}{" "}
              {sessionStorage.getItem("country")}
            </span>
            <span className={styles.contact}>
              <LinkedIn fontSize="small" /> {sessionStorage.getItem("linkedin")}
            </span>
            <span className={styles.contact}>
              <GitHub fontSize="small" /> {sessionStorage.getItem("github")}
            </span>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column1}>
            {ExperienceData.length > 1 && (
              <div className={styles.title}>Experience</div>
            )}
            {ExperienceData.map((experience, index) => (
              <div>
                <div className={styles.subTitle}>
                  {experience.jobTitle}
                  <br />
                  <span className={styles.head}>{experience.company}</span>
                </div>
                <div className={styles.content}>
                  <CalendarMonth fontSize="small" /> {experience.expStartDate} -{" "}
                  {experience.expEndDate}
                </div>
                <div className={styles.content}>
                  <li>{experience.point1}</li>
                  <li>{experience.point2}</li>
                </div>
              </div>
            ))}

            {Education.length > 1 && (
              <div className={styles.title}>Education</div>
            )}
            {Education.map((education, index) => (
              <>
                <div className={styles.subTitle}>
                  {education.title}
                  <br />
                  <span className={styles.head}>{education.instituteName}</span>
                </div>
                <div className={styles.content}>
                  {education.percentage} | <CalendarMonth fontSize="small" />{" "}
                  {education.session}
                </div>
              </>
            ))}
          </div>

          <div className={styles.column2}>
            {storedTags.length > 0 && (
              <div className={styles.title}>Skills</div>
            )}
            <div className={styles.content}>
              <ul>
                {storedTags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>

            {ProjectData.length > 1 && (
              <div className={styles.title}>Projects</div>
            )}
            {ProjectData.map((project, index) => (
              <div>
                <div className={styles.subTitle}>
                  {project.projectTitle} <br />
                  <span className={styles.head}>{project.projectName}</span>
                </div>
                <div className={styles.content}>{project.aboutProject}</div>
                <div className={styles.content}>
                  <CalendarMonth fontSize="small" /> {project.startDate} -{" "}
                  {project.endDate}
                </div>
              </div>
            ))}

           {Certificates.length > 1 && (
            <div className={styles.title}>Certificate/ Achievement</div>
           )}
           {Certificates.map((certificate, index) => (
            <div>
            <div className={styles.content}>
              {certificate.certificateTitle}
            </div>
            <div className={styles.content}>
              <CalendarMonth fontSize="small" />{" "}
              {certificate.startDate} - {certificate.endDate}
            </div>
            </div>
           ))}

            {storedInterest.length > 0 && (
              <div className={styles.title}>Interest</div>
            )}
            <div className={styles.content}>
              <ul>
                {storedInterest.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template4;
