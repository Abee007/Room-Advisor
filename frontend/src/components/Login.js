import './Login.css'
import React from 'react'

function LoginComponent() {
  const casLogin = () => {
    console.log("casLogin");
    window.open("http://localhost:4000/auth/cas", "_self");
  };

  return (
    <div className='login-button-container'>
      <div className='login-button' onClick={casLogin}>LOGIN WITH CAS</div>
    </div>
  );
}

export default LoginComponent;
