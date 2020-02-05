// module.exports = (req, res, next) => {
//     if (req.session && req.session.loggedIn) {
//         next();
//     } else {
//         res.status(401).json({ error: 'not logged in' });
//     }
//   };

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req, 'session req')
  if (authorization) {
    const secret = process.env.JWT_SECRET || "This is the secret";

    jwt.verify(authorization, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again" });
  }
};
