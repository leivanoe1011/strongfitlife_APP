
const mongoose = require("mongoose");

// there are times
const messageSchema = new mongoose.Schema({
  // chatroom foreign key
  chatroom: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Chatroom is required!",
    ref: "Chatroom",
  },
  // The foreign key is the user here
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Chatroom is required!",
    ref: "User",
  },
  message: {
    type: String,
    required: "Message is required!",
  },
});

module.exports = mongoose.model("Message", messageSchema);
