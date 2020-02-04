//imports
const bc = require("bcryptjs");
const users = require("../models/userModel");
const restricted = require("./session");
const jwt = require("jsonwebtoken");

//variables
const router = require("express").Router();

//code
//register
router.post("/register", (req, res) => {
  const user = req.body;
  console.log(user);
  const hash = bc.hashSync(user.password, 8);
  user.password = hash;
  users
    .add(user)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: "could not create account" });
    });
});
//login
router.post("/login", (req, res) => {
  let { username, password } = req.body;
  users
    .getBy({ username })
    .first()
    .then((user) => {
      if (user && bc.compareSync(password, user.password)) {
        const token = signToken(user);
        res.status(200).json({
          token,
          message: `Welcome ${user.username}!`,
        });
        // req.session.loggedIn = true;
        // req.session.userId = user.id;
        // res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: "Incorrect Password" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "unable to login" });
    });
});

function signToken(user) {
  const payload = {
    username: user.username,
    password: user.password,
  };

  const secret = process.env.JWT_SECRET || "This is the secret";

  const options = {
    expiresIn: "2d",
  };

  return jwt.sign(payload, secret, options);
}

//exports
module.exports = router;
