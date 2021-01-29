

const mongoose = require("mongoose");
const Chatroom = mongoose.model("Chatroom");

// The Request object contains the Payload loaded by the Authorization Middleware
exports.createChatroom = async (req, res) => {
  
  const { name } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Chatroom name can contain only alphabets.";

  // Dont move to the next step until the chatroom name is validated
  const chatroomExists = await Chatroom.findOne({ name });

  if (chatroomExists) throw "Chatroom with that name already exists!";

  // Create a Chatroom Model Object 
  const chatroom = new Chatroom({
    name,
  });

  // Save the Chatroom object in Mongo DB
  await chatroom.save();

  res.json({
    message: "Chatroom created!",
  });
};

// Get all Chatrooms after the User has been validated
exports.getAllChatrooms = async (req, res) => {


  // Wait until all chatrooms are loaded before sending back the Object
  const chatrooms = await Chatroom.find({});

  res.json(chatrooms);
};


exports.getChatId = async (req, res) => {

  const chatId = req.body.id;

  const chatroom = await Chatroom.find({});

  res.json(chatroom);

}


