import React, { useState, useEffect, lazy, Suspense } from "react";

// import LandingPage from "./LandingPage";
// import RegisterPage from "./RegisterPage";
// import ViewReviews from "../components/ViewReviews";
// import AboutPage from "./AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { cryptoKey } from "../constants";
import { sha256 } from "js-sha256";
const LandingPage = lazy(() => import("./LandingPage"));
const RegisterPage = lazy(() => import("./RegisterPage"));
const ViewReviews = lazy(() => import("./ViewReviewsPage"));
const AboutPage = lazy(() => import("./AboutPage"));
const FavoritesPage = lazy(() => import("./FavoritesPage"));

// TODO: WHAT HAPPENS IF FIREBASE FAILS?
function RegisterandProtectedPages({ casUser }) {
  const [isLoading, setLoading] = useState(true);
  const [isValidated, setValidated] = useState(false);
  const [validatedUserObject, setUserObject] = useState(undefined);

  // VALIDATE USER ONCE//
  useEffect(() => {
    const validateUser = async (casUser) => {
      // Collection ref
      const usersCollectionRef = collection(db, "Users");

      // Hash netId with stored cryptoKey
      const hash = sha256.hmac(cryptoKey, casUser.id);

      // Query
      const q = query(usersCollectionRef, where("netId", "==", hash));

      // Get data
      const data = await getDocs(q);
      let valid = false;
      data.forEach((doc) => {
        if (hash === doc.data().netId) {
          valid = true;
          setUserObject(doc.data());
        }
      });
      setValidated(valid);
      setLoading(false);
    };

    validateUser(casUser);
  }, [casUser]);

  if (isLoading) {
    return <div className="App">Validating...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* For any other route, navigate back to home page */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* If the user isn't logged in navigate to Landing page. Else navigate to review page */}
        <Route path="/" element={!casUser ? (<Navigate to="/logout" />) : (<Navigate to="/viewreviews" />)}/>
        <Route
          path="/viewreviews"
          element={
            isValidated ? (
              <ViewReviews user={validatedUserObject} />
            ) : (
              <Navigate to="/register" />
            )
          }
        />
        {/* REGISTER USER */}
        <Route
          path="/register"
          element={
            !isValidated ? (
              <RegisterPage user={casUser} />
            ) : (
              <Navigate to="/viewreviews" />
            )
          }
        />
        <Route path="/favorites" element={isValidated ? (<FavoritesPage user={validatedUserObject} />) : (<Navigate to="/" />)} />
        <Route path="/about" element={<AboutPage user={validatedUserObject} />} />
        {/* Performs a soft logout so we don't actually log users out of cas */}
        <Route path="/logout" element={<LandingPage isLoggedIn={true} />} />
      </Routes>
    </Suspense>
  );
}

export default RegisterandProtectedPages;
