import React from "react";
import LandingPage from "./pages/LandingPage";
import RegisterandProtectedPages from "./pages/ProtectedPages";
import { BrowserRouter as Router } from "react-router-dom";

function LandingRegisterProtected({ user }) {
  // If user, user object was found. If user===undefined, user isn't logged in.
  return (
    <Router>
      <div className="App">
        <div>
          {user === undefined ? (
            <LandingPage isLoggedIn={false} />
          ) : (
            <RegisterandProtectedPages user={user} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default LandingRegisterProtected;
