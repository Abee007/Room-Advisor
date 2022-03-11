import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginAlreadyComponent() {
  const navigate = useNavigate();
  return (
    <div className="login-button-container">
      <div className="login-button" onClick={() => navigate("/viewreviews")}>
        LOGIN WITH CAS
      </div>
    </div>
  );
}

export default LoginAlreadyComponent;
