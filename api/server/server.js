//imports
const express = require("express");
const session = require("express-session");
const authRouter = require("../auth/authRouter");
const exerciseRouter = require("../../exercises/exercises-router");
const authenticate = require("../auth/session");

//variables
const server = express();
const sessionConfig = {
  name: "session",
  secret: process.env.SESSION_SECRET || "secret",
  cookie: {
    maxAge: 1000 * 60 * 10, // 10 minutes in ms
    secure: false, // set to true in production, only send cookies over HTTPS
    httpOnly: true, // JS cannot access the cookies on the browser
  },
  resave: false,
  saveUninitialized: true,
};

//code
server.use(express.json());
server.use(session(sessionConfig));
server.use("/api/auth", authRouter);
server.use("/api/exercises", exerciseRouter);
// tester
server.get("/", (req, res) => {
  res.status(201).json({ working: "true" });
});

//exports
module.exports = server;
