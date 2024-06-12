import React from "react";
import styles from "../TemplateCss/Template6.module.css";
import {
  CalendarMonth,
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

const Template6 = () => {
  const ProjectData = JSON.parse(sessionStorage.getItem("projects")) || [];
  const Education = JSON.parse(sessionStorage.getItem("educations")) || [];
  const storedTags = JSON.parse(sessionStorage.getItem("tags")) || [];
  const storedInterest = JSON.parse(sessionStorage.getItem("interests")) || [];
  const Certificates = JSON.parse(sessionStorage.getItem("certificates")) || [];
  const ExperienceData =
    JSON.parse(sessionStorage.getItem("experienceData")) || [];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.col1}>
            <img
              className={styles.image}
              src={sessionStorage.getItem("Image")}
              alt=""
            />
          </div>
          <div className={styles.col2}>
            <span className={styles.heading}>
              {sessionStorage.getItem("firstname")}{" "}
              {sessionStorage.getItem("lastName")}
            </span>
            <span className={styles.subHeading}>
              {sessionStorage.getItem("currentRole")}
            </span>
          </div>
        </div>

        <div className={styles.row2}>
          <div className={styles.column1}>
            {ExperienceData.length > 1 && (
              <div className={styles.row2Heading}>Experience</div>
            )}
            {ExperienceData.map((experinece, index) => (
              <div key={index}>
                <div className={styles.col1Title}>{experinece.jobTitle}</div>
                <div className={styles.col1SubTitle}>
                  {experinece.company}
                  <span className={styles.date}>
                    {experinece.expStartDate} - {experinece.expEndDate}
                  </span>
                </div>
                <ul>
                  <li className={styles.icon}>
                    <span className={styles.content}>{experinece.point1}</span>
                  </li>
                  <li className={styles.icon}>
                    <span className={styles.content}>{experinece.point2}</span>
                  </li>
                </ul>
              </div>
            ))}

            {Education.length > 1 && (
              <div className={styles.row2Heading}>Education</div>
            )}
            {Education.map((education, index) => (
              <div key={index}>
                <div className={styles.col1Title}>{education.title}</div>
                <div className={styles.col1SubTitle}>
                  {education.instituteName}
                  <span className={styles.date}>{education.session}</span>
                </div>
              </div>
            ))}

            {ProjectData.length > 1 && (
              <div className={styles.row2Heading}>projects</div>
            )}
            {ProjectData.map((project, index) => (
              <div key={index}>
                <div className={styles.col1Title}>{project.projectTitle}</div>
                <div className={styles.col1SubTitle}>
                  {project.projectName}
                  <span className={styles.date}>
                    {project.startDate} - {project.endDate}
                  </span>
                </div>
                <ul>
                  <li className={styles.icon}>
                    <span className={styles.content}>
                      {project.aboutProject}
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.column2}>
            <div className={styles.row2Heading}>Contact</div>
            <div className={styles.content}>
              <LocationOn className={styles.icon} fontSize="0.9rem" />{" "}
              {sessionStorage.getItem("address")}{" "}
              {sessionStorage.getItem("city")}{" "}
              {sessionStorage.getItem("pincode")}{" "}
              {sessionStorage.getItem("country")}
            </div>
            <div className={styles.content}>
              <Email className={styles.icon} fontSize="0.9rem" />{" "}
              {sessionStorage.getItem("email")}
            </div>
            <div className={styles.content}>
              <Phone className={styles.icon} fontSize="0.9rem" />{" "}
              {sessionStorage.getItem("phone")}
            </div>
            <div className={styles.content}>
              <LinkedIn className={styles.icon} fontSize="0.9rem" />{" "}
              {sessionStorage.getItem("linkedin")}
            </div>
            <div className={styles.content}>
              <GitHub className={styles.icon} fontSize="0.9rem" />{" "}
              {sessionStorage.getItem("github")}
            </div>

            {storedTags.length > 0 && (
              <div className={styles.row2Heading}>Skills</div>
            )}
            <ul>
              {storedTags.map((tag, index) => (
                <li className={styles.icon} key={index}>
                  <span className={styles.content}>{tag}</span>
                </li>
              ))}
            </ul>

            {storedInterest.length > 0 && (
              <div className={styles.row2Heading}>interests</div>
            )}
            <ul>
              {storedInterest.map((interest, index) => (
                <li className={styles.icon} key={index}>
                  <span className={styles.content}>{interest}</span>
                </li>
              ))}
            </ul>

            {Certificates.length > 1 && (
            <div className={styles.row2Heading}>Certificate/ Achievement</div>
            )}
            {Certificates.map((certificate, index) => (
            <div key={index}>
            <div className={styles.content}>
              {certificate.certificateTitle}
            </div>
            <div>
              <CalendarMonth className={styles.icon} fontSize="0.9rem" />{" "}
              {certificate.startDate} - {certificate.endDate}
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template6;
