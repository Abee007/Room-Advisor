const cookieSession = require("cookie-session");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const routesHandler = require("./routes/handler.js");
const cookie_parser = require('cookie-parser');
require("./passport");

const app = express();
app.use(
  cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(cookie_parser('1234'));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "https://room-advisor-v0.web.app",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
