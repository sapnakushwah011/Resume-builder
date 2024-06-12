import { Chip, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import styles from "./Experience.module.css";

const Experience = () => {
  const navigate = useNavigate();

  const [experienceData, setExperienceData] = useState([
    {
      jobTitle: "",
      company: "",
      point1: "",
      point2: "",
      expStartDate: "",
      expEndDate: "",
    },
  ]);

  const handleSubmit = () => {
    sessionStorage.setItem("experienceData", JSON.stringify(experienceData));
    navigate("/education");
  };
  const handleLink = () => {
    sessionStorage.setItem("experienceData", JSON.stringify(experienceData));
  };

  const handleBack = () => {
    sessionStorage.setItem("experienceData", JSON.stringify(experienceData));
    navigate("/basicInfo");
  };

  const addExperience = () => {
    setExperienceData([
      ...experienceData,
      {
        jobTitle: "",
        company: "",
        point1: "",
        point2: "",
        expStartDate: "",
        expEndDate: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updatedExperience = [...experienceData];
    updatedExperience.splice(index, 1);
    setExperienceData(updatedExperience);
  };

  const handleChange = (index, field, value) => {
    const updatedExperience = [...experienceData];
    updatedExperience[index][field] = value;
    setExperienceData(updatedExperience);
  };

  useEffect(() => {
    
    const storedExperienceData = JSON.parse(
      sessionStorage.getItem("experienceData")
    );
    if (storedExperienceData) {
      setExperienceData(storedExperienceData);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col1}>
              <Button href="/basicInfo" onClick={handleLink}>Basic Info</Button>
              <Button href="/experience" onClick={handleLink}>Experience</Button>
              <Button href="/education" onClick={handleLink}>Education</Button>
              <Button href="/project" onClick={handleLink}>Project</Button>
              <Button href="/certificate" onClick={handleLink}>Certificate/Achievement</Button>
              <Button href="/other" onClick={handleLink}>Other Details</Button>
              <Button href="/resume" onClick={handleLink}>Preview</Button>
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
                    Experience
                  </Typography>
                </span>
                {experienceData.map((experience, index) => (
                  <div key={index}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          name="jobTitle"
                          label="Job Title"
                          value={experience.jobTitle}
                          placeholder="e.g. Software Engineer"
                          fullWidth
                          onChange={(e) =>
                            handleChange(index, "jobTitle", e.target.value)
                          }
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          name="company"
                          label="Company"
                          value={experience.company}
                          placeholder="e.g. Microsoft"
                          fullWidth
                          onChange={(e) =>
                            handleChange(index, "company", e.target.value)
                          }
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <h6 style={{ color: "grey" }}>Description</h6>
                        <TextField
                          required
                          name="point1"
                          label="Point 1"
                          value={experience.point1}
                          placeholder="e.g. create maintainable and stable code using React"
                          type="text"
                          fullWidth
                          onChange={(e) =>
                            handleChange(index, "point1", e.target.value)
                          }
                          variant="standard"
                          multiline
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          name="point2"
                          label="Point 2"
                          value={experience.point2}
                          placeholder="e.g. Perform bug fixes and code reviews."
                          type="text"
                          fullWidth
                          onChange={(e) =>
                            handleChange(index, "point2", e.target.value)
                          }
                          variant="standard"
                          multiline
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          label="Start Date"
                          type="text"
                          placeholder="e.g. 2012"
                          name="expStartDate"
                          fullWidth
                          onChange={(e) =>
                            handleChange(index, "expStartDate", e.target.value)
                          }
                          value={experience.expStartDate}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          label="End Date"
                          type="text"
                          placeholder="e.g. 2013"
                          name="expEndDate"
                          value={experience.expEndDate}
                          fullWidth
                          onChange={(e) =>
                            handleChange(index, "expEndDate", e.target.value)
                          }
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>

                    <div style={{ marginTop: "20px" }}>
                      {index > 0 && (
                        <Chip
                          label="Remove Experience"
                          color="secondary"
                          onDelete={() => removeExperience(index)}
                        />
                      )}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: "20px" }}>
                  <Chip
                    label="Add Experience"
                    color="primary"
                    onClick={addExperience}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button sx={{ mt: 3, ml: 1 }} onClick={handleBack}>
                    {" "}
                    Back{" "}
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next <ArrowForwardIcon />
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

export default Experience;
