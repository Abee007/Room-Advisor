import "./App.css";
import { useEffect, useState } from "react";
import LandingRegisterProtected from "./LandingRegisterProtected";
import { serverIp } from "./constants";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch(`${serverIp}/auth/login/success`, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject);
          setUser(resObject.user);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser();
  }, []);

  console.log("Current User:");
  console.log(user);

  // Make sure user object is fetched
  if(isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <LandingRegisterProtected user={user} />
  );
}

export default App;
