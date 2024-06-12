import React, { useState } from "react";
import styles from "./Registration.module.css";
import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && email && password) {
        const userData = {
          name: name,
          email: email,
          password: password,
        };
        console.log("USERDATA...", userData);

        const res = await fetch(
          "https://resume-builder-backend-ejnf.onrender.com/register ",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
         const apiData = await res.json();
         Navigate("/login");
      } else {
        alert("Invalid Input");
      }
    } catch (err) {
      console.log(`Error.....${err}`);
    }
    setName("");
    setEmail("");
    setPassword("");
    setPassword("");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
        <span className={styles.header} >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Sign Up
            </Typography>
          </span>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  label="Enter Full Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Enter Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Enter Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
