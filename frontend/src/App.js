import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProtectedPages from "./pages/ProtectedPages";
import Nav from "./components/Nav";
import GetClientUrlComponent from "./utils/GetClientUrl";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { serverIp } from "./constants";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch(`${serverIp}/auth/login/success`, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser();
  }, []);

  return (
    <Router>
      <GetClientUrlComponent />
      <div className="App">
        <header className="App-header">
          <Nav user={user} />
          <div>{!user ? <LandingPage /> : <ProtectedPages user={user} />}</div>
        </header>
      </div>
    </Router>
  );
}

export default App;
