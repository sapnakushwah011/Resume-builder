import React, { useEffect, useRef, useState } from "react";
import styles from "./Resume.module.css";
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';
import ReactToPrint from "react-to-print";
import { useNavigate } from "react-router-dom";
import Template1 from "../../TemplateComponent/Templates/Template1";
import Template2 from "../../TemplateComponent/Templates/Template2";
import Template3 from "../../TemplateComponent/Templates/Template3";
import Template4 from "../../TemplateComponent/Templates/Template4";
import Template5 from "../../TemplateComponent/Templates/Template5";
import Template6 from "../../TemplateComponent/Templates/Template6";
import Navbar from "../navbar/Navbar";

const Resume = () => {
  const navigation = useNavigate();
  const resumeRef = useRef();
  const selectedTemplate = sessionStorage.getItem("selectedTemplateId");

  const handleDownload = () => {
    alert("Downloading resume...");
  };

  const handleNewResume = () => {

    Swal.fire({ 
      text: 'If you continue all data will be lost?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'continue'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("firstname");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("currentRole");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("address");
        sessionStorage.removeItem("pincode");
        sessionStorage.removeItem("city");
        sessionStorage.removeItem("country");
        sessionStorage.removeItem("linkedin");
        sessionStorage.removeItem("github");
        sessionStorage.removeItem("Image");
        sessionStorage.removeItem("certificates");
        sessionStorage.removeItem("experienceData");
        sessionStorage.removeItem("educations");
        sessionStorage.removeItem("projectData");
        sessionStorage.removeItem("tags");
        sessionStorage.removeItem("interests");
        navigation("/");
      }
    })
  };

  return (
    <>
      <Navbar />
      <div className={styles.btn}>
        <Button
          variant="outlined"
          sx={{ mt: 3, ml: 1 }}
          onClick={() => navigation("/other")}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          sx={{ mt: 3, ml: 1 }}
          onClick={handleNewResume}
        >
          Make new Resume
        </Button>
        <ReactToPrint
          trigger={() => {
            return (
              <Button
                variant="contained"
                color="success"
                onClick={handleDownload}
              >
                Download
              </Button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <Button href="/basicInfo">Basic Info</Button>
            <Button href="/experience">Experience</Button>
            <Button href="/education">Education</Button>
            <Button href="/project">Project</Button>
            <Button href="/certificate">Certificate/Achievement</Button>
            <Button href="/other">Other Details</Button>
          </div>
          <div className={styles.col2}>
            <div ref={resumeRef}>
              {selectedTemplate === "template1" && <Template1 />}
              {selectedTemplate === "template2" && <Template2 />}
              {selectedTemplate === "template3" && <Template3 />}
              {selectedTemplate === "template4" && <Template4 />}
              {selectedTemplate === "template5" && <Template5 />}
              {selectedTemplate === "template6" && <Template6 />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
