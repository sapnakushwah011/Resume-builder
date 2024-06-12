import React from "react";
import styles from "../TemplateCss/Template3.module.css";
import {
  AlternateEmail,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { CalendarIcon } from "@mui/x-date-pickers";

const Template3 = () => {
  const storedTags = JSON.parse(sessionStorage.getItem("tags")) || [];
  const storedInterest = JSON.parse(sessionStorage.getItem("interests")) || [];
  const ProjectData = JSON.parse(sessionStorage.getItem("projects")) || [];
  const ExperienceData = JSON.parse(sessionStorage.getItem("experienceData")) || [];
  const Certificates = JSON.parse(sessionStorage.getItem("certificates")) || [];
  const Education = JSON.parse(sessionStorage.getItem("educations")) || [];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className={styles.image}
                src={sessionStorage.getItem("Image")}
                alt=""
              />
            </div>
            <div className={styles.col1Section}>
              <h5 className={styles.heading}>Contact</h5>
              <div className={styles.subHeading}>
                <div>
                  <Phone fontSize="small" /> {sessionStorage.getItem("phone")}
                </div>
                <div>
                  <AlternateEmail fontSize="small" />{" "}
                  {sessionStorage.getItem("email")}
                </div>
                <div>
                  <LocationOn fontSize="small" />
                  {sessionStorage.getItem("address")},{" "}
                  {sessionStorage.getItem("city")},{" "}
                  {sessionStorage.getItem("country")}
                </div>
                <div>
                  <LinkedIn fontSize="small" />{" "}
                  {sessionStorage.getItem("linkedin")}
                </div>
                <div>
                  <GitHub fontSize="small" /> {sessionStorage.getItem("github")}
                </div>
              </div>

              {storedTags.length > 0 && (
                <h5 className={styles.heading}>Skill</h5>
              )}
              <div className={styles.subHeading}>
                <ul>
                  {storedTags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>

              {Certificates.length > 1 && (
              <h5 className={styles.heading}>Certificate</h5>
              )}
               {Certificates.map((certificate, index) => (
                <div>
              <div className={styles.subHeading}>
                {certificate.certificateTitle}
              </div>
              <div className={styles.subHeading}>
                <CalendarIcon fontSize="small" />{" "}
                {certificate.startDate} - {certificate.endDate}
              </div>
              </div>
               ))}

              {storedInterest.length > 0 && (
                <h5 className={styles.heading}>Interest</h5>
              )}
              <div className={styles.subHeading}>
                <ul>
                  {storedInterest.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.col2}>
            <div>
              <div className={styles.col2Section}>
                <div className={styles.col2Heading}>
                  {sessionStorage.getItem("firstname")}{" "}
                  {sessionStorage.getItem("lastName")}
                  <div className={styles.content} style={{ color: "blue" }}>
                    {sessionStorage.getItem("currentRole")}
                  </div>
                </div>

                {ExperienceData.length > 1 && (
                  <div className={styles.col2SubHeading}>Experience</div>
                )}
                {ExperienceData.map((experience) => (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between ",
                      }}
                    >
                      <span className={styles.Exp}>
                        {experience.jobTitle} <br />
                        {experience.company}
                      </span>
                      <span className={styles.content}>
                        {experience.expStartDate} - {experience.expEndDate}
                      </span>
                    </div>
                    <div className={styles.content}>
                      <ul>
                        <li>{experience.point1}</li>
                        <li>{experience.point2}</li>
                      </ul>
                    </div>
                  </div>
                ))}

                {Education.length > 1 && (
                  <div className={styles.col2SubHeading}>Education</div>
                )}
                {Education.map((education, index) => (
                  <div>
                    <div className={styles.Exp}>{education.title}</div>
                    <span className={styles.content}>
                      {education.instituteName}
                    </span>
                    <div className={styles.content}>
                      <CalendarIcon fontSize="1.0rem" /> {education.session} |{" "}
                      {education.percentage}
                    </div>
                    <br />
                  </div>
                ))}

                {ProjectData.length > 1 && (
                  <div className={styles.col2SubHeading}>Projects</div>
                )}
                {ProjectData.map((project, index) => (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between ",
                      }}
                    >
                      <span className={styles.Exp}>
                        {project.projectTitle}
                        <br />
                        {project.projectName}
                      </span>
                      <span className={styles.content}>
                        {project.startDate} - {project.endDate}
                      </span>
                    </div>
                    <div className={styles.content}>
                      <ul>
                        <li>{project.aboutProject}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template3;
