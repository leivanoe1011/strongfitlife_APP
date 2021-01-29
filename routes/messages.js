
const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const messageController = require("../controllers/messageController");

const auth = require("../middlewares/auth");

router.post("/getAllMessages", catchErrors(messageController.getAllmessages));

module.exports = router;


