
const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatroomController");

const auth = require("../middlewares/auth");

// Before accessing the Chatroom Controller, run the Authorization function
// This will load the Payload which includes the User ID to the Request Object
router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));
router.post("/getChatId", auth, catchErrors(chatroomController.getChatId));
router.post("/createChatroom", auth, catchErrors(chatroomController.createChatroom) )

module.exports = router;


