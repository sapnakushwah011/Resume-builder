import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import styles from "./Education.module.css";

const Education = () => {
  const navigation = useNavigate();

  const [educations, setEducations] = useState([
    {
      title: "",
      instituteName: "",
      percentage: "",
      session: "",
    },
  ]);

  const handleChange = (index, e) => {

    // Destructure the 'name' and 'value' properties from the event target
    const { name, value } = e.target; 

    // Create a copy of the 'educations' array using the spread operator
    const updatedEducations = [...educations];
    updatedEducations[index] = { ...updatedEducations[index], [name]: value };
    setEducations(updatedEducations);    // Update the state variable 'educations' with the modified array
  };

  const addEducation = () => {

    //adding values to the array
    setEducations([
      ...educations,
      { title: "", instituteName: "", percentage: "", session: "" },
    ]);
  };

  const removeEducation = (index) => {
    if (educations.length === 1) {
      return;
    }
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("educations", JSON.stringify(educations));
    navigation("/project");
  };

  const handleLink = () => {
    sessionStorage.setItem("educations", JSON.stringify(educations));
  };

  useEffect(() => {
    const storedEducationData = JSON.parse(
      sessionStorage.getItem("educations")
    );
    if (storedEducationData) {
      setEducations(storedEducationData);
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
                    Education
                  </Typography>
                </span>
                {educations.map((education, index) => (
                  <div key={index}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          name="title"
                          fullWidth
                          placeholder="e.g. High School, Bachelor Of Engineering etc."
                          label="Title"
                          variant="standard"
                          onChange={(e) => handleChange(index, e)}
                          value={education.title}
                          type="text"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          name="instituteName"
                          fullWidth
                          placeholder="e.g. University of Columbia"
                          label="Institute/ University Name"
                          variant="standard"
                          onChange={(e) => handleChange(index, e)}
                          value={education.instituteName}
                          type="text"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          name="percentage"
                          fullWidth
                          required
                          placeholder="e.g. 76%"
                          type="text"
                          label="CGPA/Percentage(%)"
                          variant="standard"
                          value={education.percentage}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          name="session"
                          required
                          fullWidth
                          type="text"
                          label="Session"
                          placeholder="e.g. 2018-2022"
                          variant="standard"
                          value={education.session}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Grid>
                    </Grid>

                    <div style={{ marginTop: "20px" }}>
                      {index > 0 && (
                        <Button
                          variant="outlined"
                          type="button"
                          onClick={() => removeEducation(index)}
                        >
                          Remove Education
                        </Button>
                      )}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: "20px" }}>
                  <Button
                    variant="outlined"
                    type="button"
                    onClick={addEducation}
                  >
                    Add Another Education
                  </Button>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    sx={{ mt: 3, ml: 1 }}
                    onClick={() => navigation("/experience")}
                  >
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

export default Education;
