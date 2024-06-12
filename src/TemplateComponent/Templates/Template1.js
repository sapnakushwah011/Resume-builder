import React from "react";
import styles from "../TemplateCss/Template1.module.css";
import {
  CalendarMonth,
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

const Template1 = () => {
  const ProjectData = JSON.parse(sessionStorage.getItem("projects")) || [];
  const Education = JSON.parse(sessionStorage.getItem("educations")) || [];
  const storedTags = JSON.parse(sessionStorage.getItem("tags")) || [];
  const storedInterest = JSON.parse(sessionStorage.getItem("interests")) || [];
  const Certificates = JSON.parse(sessionStorage.getItem("certificates")) || [];
  const ExperienceData =
    JSON.parse(sessionStorage.getItem("experienceData")) || [];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <img
              className={styles.image}
              src={sessionStorage.getItem("Image")}
              alt=""
            />
            <div className={styles.contact}>
              <div className={styles.title}>Contact</div>
              <div className={styles.content}>
                <LocationOn fontSize="small" />{" "}
                {sessionStorage.getItem("address")}{" "}
                {sessionStorage.getItem("city")}{" "}
                {sessionStorage.getItem("pincode")}{" "}
                {sessionStorage.getItem("country")}
              </div>
              <div className={styles.content}>
                <Email fontSize="small" /> {sessionStorage.getItem("email")}
              </div>
              <div className={styles.content}>
                <Phone fontSize="small" /> {sessionStorage.getItem("phone")}
              </div>
              <div className={styles.content}>
                <LinkedIn fontSize="small" />{" "}
                {sessionStorage.getItem("linkedin")}
              </div>
              <div className={styles.content}>
                <GitHub fontSize="small" /> {sessionStorage.getItem("github")}
              </div>
            </div>

            <div className={styles.skill}>
              {storedTags.length > 0 && (
                <div className={styles.title}>Skill</div>
              )}
              <div className={styles.content}>
                <ul>
                  {storedTags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>

              {storedInterest.length > 0 && (
                <div className={styles.title}>Interests</div>
              )}
              <div className={styles.content}>
                <ul>
                  {storedInterest.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>

              {Certificates.length > 1 && (
                <div className={styles.title}>Certificate/ Achievement</div>
              )}
              {Certificates.map((certificate, index) => (
                <div>
                  <div className={styles.subTitle}>
                    {certificate.certificateTitle}
                  </div>
                  <span className={styles.content}>
                  {Certificates.length > 1 && (
                    <CalendarMonth fontSize="0.9rem" />
                  )}{" "}
                    {certificate.startDate} - {certificate.endDate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.col2}>
            <div className={styles.row1}>
              <div className={styles.heading}>
                {sessionStorage.getItem("firstname")}{" "}
                {sessionStorage.getItem("lastName")}
              </div>
              <div className={styles.subHeading}>
                {sessionStorage.getItem("currentRole")}{" "}
              </div>
            </div>

            <div className={styles.col2Details}>
              {ExperienceData.length > 1 && (
                <div className={styles.col2Title}>Experience</div>
              )}
              {ExperienceData.map((experinece, index) => (
                <div key={index}>
                  <div className={styles.col2SubTitle}>
                    {experinece.jobTitle}
                    <br />
                    <span className={styles.col2SubTitle}>
                      {experinece.company}
                    </span>
                  </div>
                  <div className={styles.col2Content}>
                    <ul>
                      <li>{experinece.point1}</li>
                      <li>{experinece.point2}</li>
                    </ul>
                  </div>
                </div>
              ))}

              {Education.length > 1 && (
                <div className={styles.col2Title}>Education</div>
              )}
              {Education.map((education, index) => (
                <>
                  <div className={styles.col2SubTitle}>{education.title}</div>
                  <span className={styles.col2Content}>
                    {education.instituteName}
                  </span>
                  <div className={styles.col2Content}>
                    {education.percentage} | <CalendarMonth fontSize="0.9rem" />{" "}
                    {education.session}
                  </div>
                </>
              ))}

              {ProjectData.length > 1 && (
                <div className={styles.col2Title}>Project</div>
              )}
              {ProjectData.map((project, index) => (
                <>
                  <div className={styles.col2SubTitle}>
                    {project.projectTitle}
                    <br />
                    <span className={styles.col2SubTitle}>
                      {project.projectName}
                    </span>
                  </div>
                  <div className={styles.col2Content}>
                    {project.aboutProject}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
