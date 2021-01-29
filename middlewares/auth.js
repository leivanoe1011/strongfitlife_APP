

// Used to read the token
const jwt = require("jwt-then");

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) throw "Forbidden!!";

    // Within the request we can find the token
    const token = req.headers.authorization.split(" ")[1];

    // Need to pass the secret in order to read the token
    const payload = await jwt.verify(token, process.env.SECRET);

    // This will load the token to the Request Object
    // which includes the USER Mongo Model Object _ID
    req.payload = payload;

    // Move to the next step of the function that requested Authorization
    next(); 
    

  } catch (err) {
    res.status(401).json({
      message: "Forbidden 🚫🚫🚫",
    });
  }
};


