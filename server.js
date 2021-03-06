// This will bring in the ENV variables
require("dotenv").config();

const mongoose = require("mongoose");

// Here we determine the environment
const config = require("./config/key");

const jwt = require("jwt-then");


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


const PORT = process.env.PORT || 8000;
// const PORT = 8000;

const http = require("http").Server(app);


const io = require("socket.io")(http, {
  cors: {
    origin: config.socketIoPort,
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});


const Message = mongoose.model("Message");
const User = mongoose.model("User");


// Middleware for the Authentication
// Registers a middleware, which is a function that gets executed for every incoming Socket, 
// and receives as parameters the socket and a function to optionally defer execution 
// to the next registered middleware
io.use(async (socket, next) => {
  console.log("In IO user method");
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, process.env.SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {}
})


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
         
      console.log("In chatroomMessage");
      console.log(chatroomId);
      console.log(message);
      
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
// End of io.on


http.listen(PORT, ()=>{
  console.log(`listening on *:${PORT}`);
});


  

















