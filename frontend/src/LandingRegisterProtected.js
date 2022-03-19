import React from "react";
import LandingPage from "./pages/LandingPage";
import RegisterandProtectedPages from "./pages/ProtectedPages";
import { BrowserRouter as Router } from "react-router-dom";

function LandingRegisterProtected({ casUser }) {
  // If user, user object was found. If user===undefined, user isn't logged in.
  return (
    <Router>
      <div className="App">
        <div>
          {casUser === undefined ? (
            <LandingPage isLoggedIn={false} />
          ) : (
            <RegisterandProtectedPages casUser={casUser} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default LandingRegisterProtected;
