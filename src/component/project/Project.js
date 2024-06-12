import { Button, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import styles from "./Project.module.css";

const Project = () => {
  const navigation = useNavigate();

  const [projects, setProjects] = useState([
    {
      projectTitle: "",
      projectName: "",
      aboutProject: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const addProject = () => {
    setProjects([
      ...projects,
      {
        projectTitle: "",
        projectName: "",
        aboutProject: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleSubmit = () => {
    sessionStorage.setItem("projects", JSON.stringify(projects));
    navigation("/certificate");
  };

  const handleLink = ()=>{
    sessionStorage.setItem("projects", JSON.stringify(projects));
  }

  const handleBack = () => {
    sessionStorage.setItem("projectData", JSON.stringify(projects));
    navigation("/education");
  };

  const handleSkip = () => {
    navigation("/certificate");
  };

  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  useEffect(() => {
    const storedProjects = JSON.parse(sessionStorage.getItem("projects"));
    if (storedProjects) {
      setProjects(storedProjects);
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
                    Projects
                  </Typography>
                </span>
                {projects.map((project, index) => (
                  <div key={index}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          placeholder="e.g. Project 1"
                          name="projectTitle"
                          label="Title"
                          fullWidth
                          variant="standard"
                          type="text"
                          onChange={(e) =>
                            handleChange(index, "projectTitle", e.target.value)
                          }
                          value={project.projectTitle}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          placeholder="e.g. Pharmaceutical Application"
                          name="projectName"
                          label="Project name"
                          fullWidth
                          type="text"
                          onChange={(e) =>
                            handleChange(index, "projectName", e.target.value)
                          }
                          value={project.projectName}
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          placeholder="e.g. Created a responsive web application using React"
                          name="aboutProject"
                          label="About project"
                          fullWidth
                          multiline
                          variant="standard"
                          onChange={(e) =>
                            handleChange(index, "aboutProject", e.target.value)
                          }
                          value={project.aboutProject}
                          type="text"
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
                          value={project.startDate}
                          placeholder="e.g. Jan 2023"
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
                          value={project.endDate}
                          placeholder="e.g. Jun 2023"
                          fullWidth
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <div style={{ marginTop: "20px" }}>
                      {index > 0 && (
                        <Chip
                          label="Remove Project"
                          color="secondary"
                          onDelete={() => removeProject(index)}
                        />
                      )}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: "20px" }}>
                  <Chip
                    label="Add Project"
                    color="primary"
                    onClick={addProject}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button onClick={handleSkip} sx={{ mt: 3, ml: 1 }}>
                    Skip
                  </Button>

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

export default Project;
