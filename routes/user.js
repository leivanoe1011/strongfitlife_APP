
// Router will listen when we make an api call here
const router = require("express").Router();

// Bring in the Handler
const { catchErrors } = require("../handlers/errorHandlers");

// Bring in the Controller
const userController = require("../controllers/userController");

// The controllers will manage all the Server calls
// If there is any errors, the Catch Errors object will catch and handle it
router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));

module.exports = router;

