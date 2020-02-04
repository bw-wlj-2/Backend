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
//delete account
router.delete('/:id', restricted,(req, res) => {
  const { id } = req.params;
  users.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ message: 'Account deleted'});
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});
//update account
router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  let changes = req.body;
  if (!changes.username) {
    res.status(422).json({ error: 'Missing username' });
  }
  if (!changes.avatarUrl) {
    res.status(422).json({ error: 'Missing avatar url' });
  }
  if (!changes.location) {
    res.status(422).json({ error: 'Missing location' });
  }
  users.update(id, changes)
    .then((updated) => {
      if (updated) {
        res.status(200).json({ success: true, updated });
      } else {
        res.status(404).json({ error: 'Unable to update user' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
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
