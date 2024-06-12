import React, { useState, useEffect } from "react";
import styles from "./BasicInfo.module.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Avatar, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const BasicInfo = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [image, setimage] = useState({
    fileName: "./assets/Profile.png",
    bytes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the experience page
    navigate("/experience");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        console.log(imageDataUrl);

        setimage({
          fileName: imageDataUrl,
          bytes: file,
        });

        // Save the image data URL to session storage
        sessionStorage.setItem("Image", imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

 
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

     // validate the email and 

    const validateEmail = (input) => {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return emailPattern.test(input);
    };

    if (!validateEmail(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");

      //save it to the sessionStorage
      sessionStorage.setItem("email", newEmail);
    }
  };

  const handlePhoneChange = (e) => {
    // Remove non-numeric characters
    const numericValue = e.target.value.replace(/[^0-9]/g, "");

    // Enforce maximum and minimum length
    if (numericValue.length <= 10) {
      setPhone(numericValue);
      sessionStorage.setItem("phone", numericValue);
    }
    console.log(phone);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    sessionStorage.setItem("firstname", e.target.value); // save the value to the session storage
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    sessionStorage.setItem("lastName", e.target.value); // save the value to the session storage
  };

  const handleCurrentRoleChange = (e) => {
    setCurrentRole(e.target.value);
    sessionStorage.setItem("currentRole", e.target.value);// save the value to the session storage
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    sessionStorage.setItem("address", e.target.value); // save the value to the session storage
  };

  const handlePinCode = (e) => {
    setPincode(e.target.value);
    sessionStorage.setItem("pincode", e.target.value); // save the value to the session storage
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    sessionStorage.setItem("city", e.target.value); // save the value to the session storage
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
    sessionStorage.setItem("country", e.target.value); // save the value to the session storage
  };

  const handleLinkedin = (e) => {
    setLinkedin(e.target.value);
    sessionStorage.setItem("linkedin", e.target.value); // save the value to the session storage
  };

  const handleGitHub = (e) => {
    setGithub(e.target.value);
    sessionStorage.setItem("github", e.target.value); // save the value to the session storage
  };

  useEffect(() => {
 
    // retrieve the values from session storage..
    setFirstName(sessionStorage.getItem("firstname"));
    setLastName(sessionStorage.getItem("lastName"));
    setCurrentRole(sessionStorage.getItem("currentRole"));
    setPhone(sessionStorage.getItem("phone"));
    setEmail(sessionStorage.getItem("email"));
    setPincode(sessionStorage.getItem("pincode"));
    setAddress(sessionStorage.getItem("address"));
    setCity(sessionStorage.getItem("city"));
    setCountry(sessionStorage.getItem("country"));
    setLinkedin(sessionStorage.getItem("linkedin"));
    setGithub(sessionStorage.getItem("github"));
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Basic Information
                  </Typography>
                </span>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required={true}
                      name="firstName"
                      label="First name"
                      fullWidth
                      placeholder="e.g. Anthony"
                      variant="standard"
                      onChange={handleFirstName}
                      value={firstname}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="lastName"
                      label="Last name"
                      placeholder="e.g. Dominic"
                      fullWidth
                      onChange={handleLastName}
                      variant="standard"
                      value={lastname}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="currentRole"
                      label="Current Role"
                      placeholder="e.g. Student, Software Engineer  etc."
                      fullWidth
                      onChange={handleCurrentRoleChange}
                      variant="standard"
                      value={currentRole}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="phone"
                      label="Phone Number"
                      placeholder="e.g. 2025550114"
                      fullWidth
                      onChange={handlePhoneChange}
                      variant="standard"
                      value={phone}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="email"
                      label="Email"
                      placeholder="e.g. anthony@gmail.com"
                      fullWidth
                      onChange={handleEmailChange}
                      variant="standard"
                      value={email}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      required
                      name="address"
                      label="Address"
                      placeholder="e.g. Illinois,"
                      fullWidth
                      onChange={handleAddress}
                      variant="standard"
                      value={address}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="zip"
                      label="Zip / Postal code"
                      placeholder="e.g.06543,"
                      fullWidth
                      onChange={handlePinCode}
                      variant="standard"
                      value={pincode}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="city"
                      label="City"
                      placeholder="e.g. Chicago,"
                      fullWidth
                      onChange={handleCity}
                      variant="standard"
                      value={city}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="country"
                      label="Country"
                      placeholder="e.g. US"
                      fullWidth
                      onChange={handleCountry}
                      variant="standard"
                      value={country}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="linkedin"
                      label="Linked-in"
                      placeholder="e.g. https://linkedin.in/anthony"
                      fullWidth
                      variant="standard"
                      value={linkedin}
                      onChange={handleLinkedin}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="github"
                      label="Git-hub"
                      fullWidth
                      variant="standard"
                      placeholder="e.g. https://github.in/anthony"
                      value={github}
                      onChange={handleGitHub}
                    />
                  </Grid>

                  <Grid item xs={12} className={styles.icon}>
                    <IconButton
                      fullWidth
                      color="primary"
                      aria-label="upload image"
                      component="label"
                      style={{ background: "transparent", padding: 0 }}
                    >
                      <input
                        hidden
                        accept="image/png, image/gif, image/jpeg"
                        type="file"
                        onChange={handleImage}
                      />

                      <CameraAltIcon style={{ marginTop: "30px" }} />
                    </IconButton>

                    <Avatar
                      style={{
                        height: "15vh",
                        width: "15vh",
                        marginLeft: "20px",
                      }}
                      alt="Remy Sharp"
                      variant="rounded"
                      src={image.fileName}
                    />
                  </Grid>
                </Grid>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button  onClick={() => navigate("/")}>
                    Back
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

export default BasicInfo;
