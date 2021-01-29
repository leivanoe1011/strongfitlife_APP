

const express = require("express");


// Initialize the express app
const app = express();

// Recognize the incoming Request Object as a JSON Object
app.use(express.json());

// method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
// This will prevent LOCALHOST calls errors
app.use(require("cors")());

app.use("/user", require("./routes/user"));
app.use("/chatroom", require("./routes/chatroom"));
app.use("/messages", require("./routes/messages"));


// Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);


// Validating the Environment
if(process.env.ENV === "DEVELOPMENT"){
    app.use(errorHandlers.developmentErrors);
}
else{
    app.use(errorHandlers.productionErrors);
}


module.exports = app;

