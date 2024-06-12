import React from "react";
import styles from "../TemplateCss/Template5.module.css";
import {
  CalendarMonth,
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

const Template5 = () => {
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
        <div className={styles.row}>
          <div className={styles.col1}>
            <img
              className={styles.image}
              src={sessionStorage.getItem("Image")}
              alt=""
            />

            {ExperienceData.length > 1 && (
              <div className={styles.titleBody}>
                <div className={styles.title}>Experience</div>
              </div>
            )}
            {ExperienceData.map((experinece, index) => (
              <>
                <div className={styles.col1Detail}>
                  <div className={styles.head}>
                    {experinece.jobTitle}
                    <br />
                    <span className={styles.subTitle}>
                      {experinece.company}
                    </span>
                    <div>
                      <CalendarMonth fontSize="0.9rem" />{" "}
                      {experinece.expStartDate} - {experinece.expEndDate}
                    </div>
                  </div>
                  <div className={styles.content}>
                    <ul>
                      <li>{experinece.point1}</li>
                      <li>{experinece.point2}</li>
                    </ul>
                  </div>
                </div>
              </>
            ))}

            {ProjectData.length > 1 && (
              <div className={styles.titleBody}>
                <div className={styles.title}>Projects</div>
              </div>
            )}
            {ProjectData.map((project, index) => (
              <>
                <div className={styles.col1Detail}>
                  <div className={styles.head}>
                    {project.projectTitle}
                    <br />
                    <span className={styles.subTitle}>
                      {project.projectName}
                    </span>
                    <div>
                      <CalendarMonth fontSize="0.9rem" /> {project.startDate} -{" "}
                      {project.endDate}
                    </div>
                  </div>
                  <div className={styles.content}>
                    <span className={styles.content}>
                      {project.aboutProject}
                    </span>
                  </div>
                </div>
              </>
            ))}

            {Education.length > 1 && (
              <div className={styles.titleBody}>
                <div className={styles.title}>Education</div>
              </div>
            )}
            {Education.map((education, index) => (
              <>
                <div className={styles.col1Detail}>
                  <div className={styles.head}>
                    {education.title}
                    <br />
                    <span className={styles.subTitle}>
                      {education.instituteName}
                    </span>
                    <div>
                      <CalendarMonth fontSize="0.9rem" /> {education.session}
                    </div>
                  </div>
                </div>
              </>
            ))}

            {Certificates.length > 1 && (
              <div className={styles.titleBody}>
                <div className={styles.title}>Certificate</div>
              </div>
            )}
            {Certificates.map((certificate, index) => (
              <>
                <div className={styles.col1Detail}>
                  <div className={styles.subTitle}>
                    {certificate.certificateTitle}
                  </div>
                  <div className={styles.head}>
                    <CalendarMonth className={styles.icon} fontSize="0.9rem" />{" "}
                    {certificate.startDate} - {certificate.endDate}
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className={styles.col2}>
            <div className={styles.col2Details}>
              <div className={styles.heading}>
                {sessionStorage.getItem("firstname")}{" "}
                {sessionStorage.getItem("lastName")}
              </div>
              <span className={styles.subHeading}>
                {sessionStorage.getItem("currentRole")}
              </span>
            </div>

            <div className={styles.contactSection}>
              <div className={styles.col2TitleBody}>Contact</div>
              <div className={styles.col2Content}>
                <LocationOn className={styles.icon} fontSize="0.9rem" />{" "}
                {sessionStorage.getItem("address")}{" "}
                {sessionStorage.getItem("city")}{" "}
                {sessionStorage.getItem("pincode")}{" "}
                {sessionStorage.getItem("country")}
                <div>
                  <Phone className={styles.icon} fontSize="0.9rem" />{" "}
                  {sessionStorage.getItem("phone")}
                </div>
                <div>
                  <Email className={styles.icon} fontSize="0.9rem" />{" "}
                  {sessionStorage.getItem("email")}
                </div>
                <div>
                  <LinkedIn className={styles.icon} fontSize="0.9rem" />{" "}
                  {sessionStorage.getItem("linkedin")}
                </div>
                <div>
                  <GitHub className={styles.icon} fontSize="0.9rem" />{" "}
                  {sessionStorage.getItem("github")}
                </div>
              </div>

              {storedTags.length > 0 && (
                <div className={styles.col2TitleBody}>Skills</div>
              )}
              <div className={styles.col2Content}>
                <ul>
                  {storedTags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>

              {storedInterest.length > 0 && (
                <div className={styles.col2TitleBody}>Interest</div>
              )}
              <div className={styles.col2Content}>
                <ul>
                  {storedInterest.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
