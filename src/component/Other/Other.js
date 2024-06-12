import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import styles from "./Other.module.css";

const Skills = () => {
  const navigation = useNavigate();

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [interests, setInterests] = useState([]);
  const [interestInput, setInterestInput] = useState("");
  const [certificate, setCertificate] = useState("");
  const [cerStartDate, setCerStartDate] = useState("");
  const [cerEndDate, setCerEndDate] = useState("");

  const saveTagsToSessionStorage = (newTags) => {
    sessionStorage.setItem("tags", JSON.stringify(newTags)); // save the skills tag to session storage
  };

  const saveInterestsToSessionStorage = (newInterests) => {
    sessionStorage.setItem("interests", JSON.stringify(newInterests)); // save the interest tags to session storage
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value); // handle the skill input
  };

  const handleInterestInputChange = (e) => {
    setInterestInput(e.target.value); // handle the interest input
  };

  const handleAddInterest = () => {
    if (interestInput.trim() !== "") {
      const newInterests = [...interests, interestInput];
      setInterests(newInterests);
      setInterestInput("");

      // Save the updated interests to sessionStorage
      saveInterestsToSessionStorage(newInterests);
    }
  };

  const handleRemoveInterest = (interestToRemove) => {
    const newInterests = interests.filter(
      (interest) => interest !== interestToRemove
    );
    setInterests(newInterests);

    // Save the updated interests to sessionStorage
    saveInterestsToSessionStorage(newInterests);
  };

  const handleAddTag = (e) => {
    if (tagInput.trim() !== "") {
      const newTags = [...tags, tagInput];
      setTags(newTags);
      setTagInput("");

      // Save the updated tags to sessionStorage
      saveTagsToSessionStorage(newTags);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);

    // Save the updated tags to sessionStorage
    saveTagsToSessionStorage(newTags);
  };

  useEffect(() => {
    const storedTags = JSON.parse(sessionStorage.getItem("tags")) || []; // Retrieve skill tags
    const storedInterest = JSON.parse(sessionStorage.getItem("interests")) || []; // Retrieve interest tags
    setTags(storedTags);
    setInterests(storedInterest);
  }, []);


  const handleSubmit = () => {
    navigation("/resume");
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <Button href="/basicInfo">Basic Info</Button>
          <Button href="/experience">Experience</Button>
          <Button href="/education">Education</Button>
          <Button href="/project">Project</Button>
          <Button href="/certificate">Certificate/Achievement</Button>
          <Button href="/other">Other Details</Button>
          <Button href="/resume">Preview</Button>
        </div>
        <div className={styles.col2}>
          <div className={styles.body}>
            <Typography variant="h6" gutterBottom>
              Other Details
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <p>Skills</p>

                <TextField
                  required
                  label="Enter Skills"
                  variant="outlined"
                  placeholder="e.g. Java, C++, React etc."
                  value={tagInput}
                  onChange={handleTagInputChange}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") handleAddTag();
                  }}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <IconButton
                  color="primary"
                  onClick={handleAddTag}
                  style={{ marginLeft: "5px" }}
                ></IconButton>
                <div>
                  {tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      onDelete={() => handleRemoveTag(tag)}
                      style={{ marginRight: "5px", marginBottom: "5px" }}
                    />
                  ))}
                </div>
              </Grid>

              <Grid item xs={12}>
                <p>Interests</p>
                <TextField
                  label="Enter Interests"
                  variant="outlined"
                  placeholder="e.g. Reading, Traveling, Coding, etc."
                  value={interestInput}
                  onChange={handleInterestInputChange}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") handleAddInterest();
                  }}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <div>
                  {interests.map((interest) => (
                    <Chip
                      key={interest}
                      label={interest}
                      onDelete={() => handleRemoveInterest(interest)}
                      style={{ marginRight: "5px", marginBottom: "5px" }}
                    />
                  ))}
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{ mt: 3, ml: 1 }}
                  onClick={() => navigation("/certificate")}
                >
                  {" "}
                  Back{" "}
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={handleSubmit}
                >
                  Preview
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
