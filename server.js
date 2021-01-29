

// This will bring in the ENV variables
require("dotenv").config();

const mongoose = require("mongoose");

// Here we determine the environment
const config = require("./config/key");


// Connect to the Mongoose server
// The database connection lives in the ENV file
mongoose.connect(config.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  
  // Record Mongoose Error
  mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
  });
  
  // Open up the Mongoose Connection
  mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
  });

//Bring in the models
require("./models/User");
require("./models/Chatroom");
require("./models/Message");


// Bring in the Express Server
const app = require("./app");

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"]
  }
});


const jwt = require("jwt-then");


const Message = mongoose.model("Message");
const User = mongoose.model("User");


// Middleware for the Authentication
// Registers a middleware, which is a function that gets executed for every incoming Socket, 
// and receives as parameters the socket and a function to optionally defer execution 
// to the next registered middleware
io.use(async (socket, next) => {

  try{

        console.log("In socket io validating JWT token");

        // socket.handshake.query currently allows data to be set on "connect"
        const token = socket.handshake.query.token;

        // validate the token is correct
        const payload = await jwt.verify(token, process.env.SECRET);

        // Get the Mongo DB User ID
        socket.userId = payload.id;

        // After translating the token we capture 
        // the Role property that we stored at signin
        socket.role = payload.role;


        // Return the Object with the verification information above
        next();
    }
    catch(err){
      console.log(err)
    }
});


// socket io listening 
// This is the Client Socket
io.on("connection", async (socket) => {

    // When creating the Token, the User ID is loaded within the token
    // After making the JWT call, the token is parsed and USER ID stored within a property
    console.log("Connected: " + socket.userId);
    
  
    socket.on("disconnect", () => {
      console.log("Disconnected: " + socket.userId);
    });

  
    socket.on("joinRoom", ({ chatroomId }) => {
      socket.join(chatroomId);
      console.log("A user joined chatroom: " + chatroomId);
    });
  

    socket.on("leaveRoom", ({ chatroomId }) => {
      socket.leave(chatroomId);
      console.log("A user left chatroom: " + chatroomId);
    });
  
    
    // Making the function below an ASYNC function to wait until we find
    // The user ID
    socket.on("chatroomMessage", async ({ chatroomId, message }) => {
         
      // Only send back the messages if they exist
      if (message.trim().length > 0) {
        const user = await User.findOne({ _id: socket.userId });

        // Create a Message Model Object
        const newMessage = new Message({
          chatroom: chatroomId,
          user: socket.userId,
          message,
        });

        // Return the new Message to anyone connected to the same Chatroom Id
        io.to(chatroomId).emit("newMessage", {
          message,
          name: user.firstName,

          // This user ID is used to track the User that submitted the message
          userId: socket.userId,
        });

        // After the Message is sent back to the Front End, than we save it
        await newMessage.save();
      }

  });

      
  });
  

















