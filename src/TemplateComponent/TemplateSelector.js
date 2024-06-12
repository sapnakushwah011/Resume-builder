import React from "react";
import styles from "./TemplateSelector.module.css";
import { Button } from "react-bootstrap";
import { forwardRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/Template1.png";
import image2 from "../assets/Template2.png";
import image3 from "../assets/Template3.png";
import image4 from "../assets/Template4.png";
import image5 from "../assets/Template5.png";
import image6 from "../assets/Template6.png";

const Template = ({ text }, ref) => {
  const navigate = useNavigate();

  const handleSubmit = (templateId) => {
    const auth = localStorage.getItem("token");
    if (!auth) {
      Swal.fire({
        icon: "error",
        text: "Please log in first.",
        showCancelButton: true,
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      sessionStorage.setItem("selectedTemplateId", templateId);
      navigate("/basicInfo");
    }
  };

  return (
    <>
      <div className={styles.heading}>
        <h1>
          <b>{text}</b>
        </h1>
      </div>
      <div className={styles.subHeading}>
        <span>
          {" "}
          Pick a resume template, fill it out, and format. Create a professional
          resume in a few
        </span>

        <span>
          clicks. Just choose one of 5 resume templates below, add ready-made
          content,
        </span>

        <span>download, and get the job.</span>
      </div>

      <div ref={ref} id="header">
        <div className={styles.container}>
          <div className={styles.card} id="template1">
            <img
              src={image1}
              style={{ height: 400, width: 400, borderRadius: "10px" }}
            ></img>
            <div className={styles.overlay}>
              <Button onClick={() => handleSubmit("template1")}>
                Use Template
              </Button>
            </div>
          </div>
          <div className={styles.card} id="template2">
            <img
              src={image2}
              style={{ height: 400, width: 400, borderRadius: "10px" }}
            ></img>
            <div className={styles.overlay}>
              <Button onClick={() => handleSubmit("template2")}>
                Use Template
              </Button>
            </div>
          </div>
          <div className={styles.card} id="template3">
            <img
              src={image3}
              style={{ height: 400, width: 400, borderRadius: "10px" }}
            ></img>
            <div className={styles.overlay}>
              <Button onClick={() => handleSubmit("template3")}>
                Use Template
              </Button>
            </div>
          </div>
          <div className={styles.card} id="template4">
            <img
              src={image4}
              style={{ height: 400, width: 400, borderRadius: "10px" }}
            ></img>
            <div className={styles.overlay}>
              <Button onClick={() => handleSubmit("template4")}>
                Use Template
              </Button>
            </div>
          </div>
          <div className={styles.card} id="template5">
            <img
              src={image5}
              style={{ height: 400, width: 400, borderRadius: "10px" }}
            ></img>
            <div className={styles.overlay}>
              <Button onClick={() => handleSubmit("template5")}>
                Use Template
              </Button>
            </div>
          </div>
          <div className={styles.card} id="template6">
            <img
              src={image6}
              style={{ height: 400, width: 400, borderRadius: "10px" }}
            ></img>
            <div className={styles.overlay}>
              <Button onClick={() => handleSubmit("template6")}>
                Use Template
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Template);
