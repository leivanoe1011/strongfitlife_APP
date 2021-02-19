
const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256"); // encrypt password
const jwt = require("jwt-then"); // creates token


// Have to make the function below ASYNC
// In order to use AWAIT below. Also it will prevent the Event Handler
// To run before the code below runs
exports.register = async (req, res) => {

    // The order of the object variables below must be the same in the front end
    // const { name, email, password } = req.body;
    // const { firstName, lastName, dob, email, password, role } = req.body;

    const { firstName, lastName, dob, role, email, password } = req.body.user;

    console.log("In Register user Controller");

    console.log(req.body.user);
  
    // Validate that either email extension below exists within the Email Entry
    // May need an API to make sure this is Dynamic
    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;
  
    // email must contain one of the domains above
    if (!emailRegex.test(email)) throw "Email is not supported from your domain.";
  
    // Password must be 6 characters long at least
    if (password.length < 6) throw "Password must be atleast 6 characters long.";
  
    // First we validate if the user exists
    // Here we wait until moving to the next line of code
    const userExists = await User.findOne({
      email,
    });
  
    if (userExists) throw "User with same email already exits.";
  

    const userObj = {
      email : email,
      password : sha256(password + process.env.SALT), 
      firstName : firstName,
      lastName : lastName,     
      dob : dob,
      role : role
    };

    
    console.log(userObj);

    // Create Mongo User Object
    const user = new User(userObj);
    
    // Load the new User Object
    await user.save().catch(err => console.log(err));
    
    const registerMessage =   "User " + firstName + " registered successfully!";
  
    console.log(registerMessage);

    res.json({
     message : registerMessage
    });
  };
  
  // The handler is expecting an ASYNC function so we 
  // have to make the funtion below ASYNC
exports.login = async (req, res) => {
    
    const { email, password } = req.body.user;

    const decryptedPsswd = sha256(password + process.env.SALT)
  
    const user = await User.findOne({
      email,
      password: decryptedPsswd // SALT to decrypt password
    });
  
    if (!user) throw "Email and Password did not match.";
  

    const payload = { id: user.id, role : user.role};
    
    // The SECRET below is the key used to generate the token and read the token
    // Create the token which includes the USER ID
    // The user ID is captured above
    const token = await jwt.sign(payload, process.env.SECRET);
  
    // when we query the json object below,
    // index 0 is the message
    // index 1 is the token
    // the token is comprised of the User Mongoose _Id
    
    res.json({
      message: "User logged in successfully!",
      token,
      role : user.role,
      userId: user._id,
    });
  };


exports.authenticate = async(req,res) => {
  
  console.log("in server Authenticate method");

  let token = req.body.user.token;

  console.log(token);

  const payload = await jwt.verify(token, process.env.SECRET);

  console.log(payload);

  console.log("after payload");

  User.findById({_id : payload.id}, (err, user) => {
    if(err) return ({message:"Not Authenticated"});

    if(user) {
      res.status(200)
      .json({isAuthenticated: true, message: "User Authenticated", role : user.role, userId : user._id})
    }
  })

}
  

