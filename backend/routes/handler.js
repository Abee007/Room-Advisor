const express = require("express");
const router = express.Router();
const passport = require("passport");
const { cas } = require("../passport");
const url = require("url");

// APPLICATION ROUTES
var CLIENT_URL = undefined;

router.get("/clienturl", (req, res) => {
  console.log("here in clienturl");
  if (CLIENT_URL !== undefined && req.headers) {
    CLIENT_URL = `https://${url.parse(req.headers.referer).host}`;
    return res.status(200).json({
      success: true,
      message: "Grabbed client URL",
    });
  }
  return res.status(401).json({
    success: false,
    message: "Failed to grab client URL",
  });
});

router.get("/login", (req, res) => {
  const str = [
    {
      name: "LoginPage",
      msg: "Test",
    },
  ];
  res.end(JSON.stringify(str));
});

router.get("/landing", (req, res) => {
  const str = [
    {
      name: "LandingPage",
      msg: "Test",
    },
  ];
  res.end(JSON.stringify(str));
});

router.get("/viewreviews", (req, res) => {
  const str = [
    {
      name: "ViewReviews",
      msg: "Test",
    },
  ];
  res.end(JSON.stringify(str));
});

router.post("/addFavorite", (req, res) => {
  res.end("NA");
});

/// /////////////////////////

// CAS AUTHENTICATION ROUTE

/// //////////////////////////

router.get("/auth/login/success", (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: "Successfully logged in with CAS",
      user: req.user,
      cookies: req.cookies,
    });
  }
  return res.status(200).json({
    success: false,
    message: "Failed to Login with CAS",
  });
});

router.get("/auth/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Failed to Login with CAS",
  });
});

router.get("/logout", (req, res) => {
  const returnURL = CLIENT_URL;
  cas.logout(req, res, returnURL);
});

router.get(
  "/auth/cas",
  passport.authenticate("cas", { failureRedirect: "/auth/login/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("Redirect here to reviews page");
    console.log(CLIENT_URL);
    res.redirect(`${CLIENT_URL}/viewreviews`);
  }
);

module.exports = router;
