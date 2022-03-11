import "./Login.css";
import React from "react";
import { serverIp } from "../constants";

function LoginComponent() {
  const casLogin = () => {
    console.log("casLogin");
    window.open(`${serverIp}/auth/cas`, "_self");
  };

  return (
    <div className="login-button-container">
      <div className="login-button" onClick={casLogin}>
        LOGIN WITH CAS
      </div>
    </div>
  );
}

export default LoginComponent;