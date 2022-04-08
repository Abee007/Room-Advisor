import React, { useState, useEffect, lazy, Suspense } from "react";

// import LandingPage from "./LandingPage";
// import RegisterPage from "./RegisterPage";
// import ViewReviews from "../components/ViewReviews";
// import AboutPage from "./AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { db } from "../utils/firebase";
import {
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  doc,
} from "firebase/firestore";
import { cryptoKey } from "../constants";
import { sha256 } from "js-sha256";
// import TIME from "../utils/try";
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
      // Hash netId with stored cryptoKey
      const hash = sha256.hmac(cryptoKey, casUser.id);

      // Collection ref
      const usersCollectionRef = doc(db, "Users", hash);

      const userSnap = await getDoc(usersCollectionRef);

      if (userSnap.exists()) {
        setUserObject(userSnap.data());
        setValidated(true);
      }
      setLoading(false);
    };

    validateUser(casUser);
  }, [casUser]);

  const handleValidatedUserObjectChange = async (e) => {
    const favorites = e.favorites;
    setUserObject({
      ...validatedUserObject,
      meta: {
        favorites,
      },
    });

    //Update on firebase
    // Collection ref
    const usersCollectionRef = doc(db, "Users", validatedUserObject.netId);

    if (e.remove) {
      await updateDoc(usersCollectionRef, { favorites: arrayRemove(e.object) });
      // await updateDoc(usersCollectionRef, {
      //   "metafavorites": arrayRemove
      // })
    } else {
      await updateDoc(usersCollectionRef, { favorites: arrayUnion(e.object) });
    }
  };

  if (isLoading) {
    return <div className="App">Validating...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* For any other route, navigate back to home page */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* If the user isn't logged in navigate to Landing page. Else navigate to review page */}
        <Route
          path="/"
          element={
            !casUser ? (
              <Navigate to="/logout" />
            ) : (
              <Navigate to="/viewreviews" />
            )
          }
        />
        <Route
          path="/viewreviews"
          element={
            isValidated ? (
              <ViewReviews
                user={validatedUserObject}
                handleUserObject={handleValidatedUserObjectChange}
              />
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
        <Route
          path="/favorites"
          element={
            isValidated ? (
              <FavoritesPage user={validatedUserObject} handleUserObject={handleValidatedUserObjectChange} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/about"
          element={<AboutPage user={validatedUserObject} />}
        />
        {/* Performs a soft logout so we don't actually log users out of cas */}
        <Route path="/logout" element={<LandingPage isLoggedIn={true} />} />
        {/* <Route path="/upload" element={<TIME />} /> */}
      </Routes>
    </Suspense>
  );
}

export default RegisterandProtectedPages;
