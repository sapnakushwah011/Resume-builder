import React, { useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2';
import styles from "./Navbar.module.css";
import {
  Box,
  AppBar,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [basicModal, setBasicModal] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const auth = localStorage.getItem("token");


  const handleLogout = () => {
    Swal.fire({ 
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log Out'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        setShowLogout(false);
      }
    })
  };


  useEffect(() => {
    if (auth) {
      setShowLogout(true);
    } else {
      setShowLogout(false);
    }
  }, [auth]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
              <span className={styles.logo}></span>
            <Button className={styles.btn} color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button className={styles.btn} color="inherit" onClick={() => navigate("/")}>Templates</Button>
            {showLogout ? (
              <Button className={styles.btn} color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button className={styles.btn} color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
