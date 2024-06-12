import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {

  const auth = localStorage.getItem("token"); // retrieve the value of token from local storage.
  return (
      // checking if the token is present it will render the <outlet>
      // if not it will render it to login page.
      auth ? <Outlet /> : <Navigate to="/login" /> 
  )
}

export default PrivateRoute;
