import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/home/Home";
import BasicInfo from "./component/BasicInfo/BasicInfo";
import Experience from "./component/experience/Experience";
import Education from "./component/education/Education";
import Others from "./component/Other/Other";
import Resume from "./component/resume/Resume";
import Project from "./component/project/Project";
import Register from "./component/Register/Registration";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute";
import Certificate from "./component/Certificate/Certificate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/basicInfo" element={<BasicInfo />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/other" element={<Others />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
