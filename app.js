

const express = require("express");

const cookieParser = require("cookie-parser");

const path = require("path");

// Initialize the express app
const app = express();

// Recognize the incoming Request Object as a JSON Object
app.use(express.json());

// method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

//Setup Cross Origin
// This will prevent LOCALHOST calls errors
app.use(require("cors")());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));
}



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

