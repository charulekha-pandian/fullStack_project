import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();

  // Event handlers
  const onSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded); // For debugging purposes
      navigate('/layout');
    } catch (error) {
      console.error("Error decoding token", error);
      console.log("Login Failed");
    }
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <h2 style={{ color: 'white' }}>LOGIN</h2>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default Login;
