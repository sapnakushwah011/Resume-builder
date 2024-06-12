import React, { useState } from "react";
import styles from "./Login.module.css";
import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [loginID, setLoginID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [result, setResult] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let text = " ";
    try {
      if (loginID && loginPassword) {
        const UserLoginData = {
          email: loginID,
          password: loginPassword,
        };
        console.log("User Login Details......", UserLoginData);

        const resp = await fetch(
          "https://resume-builder-backend-ejnf.onrender.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(UserLoginData),
          }
        );
        if (resp.ok) {
          const apiData = await resp.json();
          // console.log(`API DATA.......${apiData.user.token}`);
          localStorage.setItem("token", apiData.user.token);
          Navigate("/");
        } else {
          text = "Email and Password are wrong";
        }
      } else {
        alert("Enter your details");
      }
      document.getElementById("res").innerHTML = text;
      setResult(text);
    } catch (err) {
      console.log(`Error.....${err}`);
    }
    setLoginID("");
    setLoginPassword("");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <span className={styles.header}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Sign In
            </Typography>
          </span>

          <form onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={loginID}
                  onChange={(e) => setLoginID(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <div id="res" style={{ color: "red", padding: "20px" }}></div>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/register" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
