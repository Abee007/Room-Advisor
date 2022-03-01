import './App.css';
import { useEffect, useState } from 'react';
import LandingRegisterProtected from './LandingRegisterProtected'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
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

  // console.log(user);

  return (
    <div>
      {/* If user, user object was found. If user===undefined, user isn't logged in. */}
      {/* Compel user object to be fetched before usage. */}
      {(user || user === undefined) && <LandingRegisterProtected user={user}/>}
    </div>
  );
}

export default App;
