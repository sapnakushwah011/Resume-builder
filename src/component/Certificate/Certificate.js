import { Button, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import styles from "./Certificate.module.css";

const Certificate = () => {
  const navigation = useNavigate();

  const [certificates, setCertificates] = useState([
    {
      certificateTitle: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      {
        certificateTitle: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  const handleSubmit = () => {
    sessionStorage.setItem("certificates", JSON.stringify(certificates));
    navigation("/other");
    console.log(certificates);
  };

  const handleLink = () => {
    sessionStorage.setItem("certificates", JSON.stringify(certificates));
  };

  const handleBack = () => {
    sessionStorage.setItem("certificates", JSON.stringify(certificates));
    navigation("/project");
  };

  const handleSkip = () => {
    navigation("/other");
  };

  const handleChange = (index, field, value) => {
    const updatedCertificates = [...certificates];
    updatedCertificates[index][field] = value;
    setCertificates(updatedCertificates);
  };

  useEffect(() => {
    const storedCertificates = JSON.parse(
      sessionStorage.getItem("certificates")
    );
    if (storedCertificates) {
      setCertificates(storedCertificates);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col1}>
              <Button href="/basicInfo" onClick={handleLink}>
                Basic Info
              </Button>
              <Button href="/experience" onClick={handleLink}>
                Experience
              </Button>
              <Button href="/education" onClick={handleLink}>
                Education
              </Button>
              <Button href="/project" onClick={handleLink}>
                Project
              </Button>
              <Button href="/certificate" onClick={handleLink}>
                Certificate/Achievement
              </Button>
              <Button href="/other" onClick={handleLink}>
                Other Details
              </Button>
              <Button href="/resume" onClick={handleLink}>
                Preview
              </Button>
            </div>
            <div className={styles.col2}>
              <div className={styles.body}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Certificate /Achievements
                  </Typography>
                </span>
                {certificates.map((certificate, index) => (
                  <div key={index}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          placeholder="e.g. Cloud Computing"
                          name="certificateTitle"
                          label="Certificate/ Achievement Name"
                          fullWidth
                          type="text"
                          onChange={(e) =>
                            handleChange(
                              index,
                              "certificateTitle",
                              e.target.value
                            )
                          }
                          value={certificate.certificateTitle}
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          name="startDate"
                          label="Start Date"
                          type="text"
                          onChange={(e) =>
                            handleChange(index, "startDate", e.target.value)
                          }
                          value={certificate.startDate}
                          placeholder="e.g. 01/2023"
                          fullWidth
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          name="endDate"
                          label="End Date"
                          type="text"
                          onChange={(e) =>
                            handleChange(index, "endDate", e.target.value)
                          }
                          value={certificate.endDate}
                          placeholder="e.g. 05/2023"
                          fullWidth
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <div style={{ marginTop: "20px" }}>
                      {index > 0 && (
                        <Chip
                          label="Remove Certificate"
                          color="secondary"
                          onDelete={() => removeCertificate(index)}
                        />
                      )}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: "20px" }}>
                  <Chip
                    label="Add Certificate"
                    color="primary"
                    onClick={addCertificate}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button onClick={handleSkip} sx={{ mt: 3, ml: 1 }}>
                    Skip
                  </Button>

                  <Button sx={{ mt: 3, ml: 1 }} onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                    <ArrowForwardIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Certificate;
