const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    //console.log(authHeader);
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "youknowhowflamescanhypnotize", (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      console.log(req.params)
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {

    console.log("verifyAuth " + req.params.userId);
    // console.log(req.params)
    //console.log(req.user)

    if (req.user.id === req.params.userId || req.user.isAdmin) {
      next();1
    } else {
      res.status(402).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // console.log(req.params.id);
    console.log(req.user);
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(402).json("You are not admin!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
