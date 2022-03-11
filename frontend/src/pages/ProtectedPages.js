import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import ViewReviews from "../components/ViewReviews";
import { Routes, Route, Navigate } from "react-router-dom";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { cryptoKey } from "../constants";
import { sha256 } from "js-sha256";

function RegisterandProtectedPages({ user }) {
  const [isLoading, setLoading] = useState(true);
  const [isValidated, setValidated] = useState(false);

  //VALIDATE USER ONCE//
  useEffect(() => {
    const validateUser = async (user) => {
      // Collection ref
      const usersCollectionRef = collection(db, "Users");

      //Hash netId with stored cryptoKey
      const hash = sha256.hmac(cryptoKey, user.id);
  
      //Query
      const q = query(usersCollectionRef, where("netId", "==", hash));
  
      //Get data
      const data = await getDocs(q);
      var valid = false;
      data.forEach((doc) => {
        if (hash === doc.data().netId) valid = true;
      });
      setValidated(valid);
      setLoading(false);
    };

    validateUser(user);
  }, [user]);

  
  if(isLoading) {
    return <div className="App">Validating...</div>;
  }

  return (
    <Routes>
      {/* For any other route, navigate back to home page */}
      <Route path="*" element={<Navigate to="/" />} />
      {/* If the user isn't logged in navigate to Landing page. Else navigate to review page */}
      <Route
        path="/"
        element={
          !user || user === undefined ? (
            <Navigate to="/logout" />
          ) : (
            <Navigate to="/viewreviews" />
          )
        }
      />
      <Route
        path="/viewreviews"
        element={isValidated ? <ViewReviews /> : <Navigate to="/register" />}
      />
      TODO:
      {/* REGISTER USER */}
      <Route path="/register" element={<Navigate to="/logout" />} />
      {/* If no user exists, navigate back to the landing page */}
      
      {/* Performs a soft logout so we don't actually log users out of cas */}
      <Route path="/logout" element={<LandingPage isLoggedIn={true}/>} />
    </Routes>
  );
}

export default RegisterandProtectedPages;
