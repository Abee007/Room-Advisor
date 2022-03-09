const cookieSession = require("cookie-session");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const routesHandler = require("./routes/handler.js");
// const client = require("./routes/constants");
require("./passport");

const app = express();
app.set("trust proxy", 1);
app.use(
  cookieSession({
    name: "__session",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 100,
    secure: true,
    httpOnly: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    credentials: true,
    origin: "https://abrahammensah.com",
    methods: "GET, POST, PUT, DELETE",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
