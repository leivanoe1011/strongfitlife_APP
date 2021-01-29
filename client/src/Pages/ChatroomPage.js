

import React from "react";
import { withRouter } from "react-router-dom";

// The socket object will get generated in the APP JS file
// Then it will get passed as a PROP
// The match object is used to capture URL Paramters
// We writing the parameters this way because we are using "destructuring"
const ChatroomPage = ({ match, socket }) => {


  // The ID will come from the APP.JS file
  const chatroomId = match.params.id;
  const [messages, setMessages] = React.useState([]);
  const messageRef = React.useRef();
  const [userId, setUserId] = React.useState("");

  // Creates a new message and sends it back to the Server
  const sendMessage = () => {

    // Validate if the Socket is not null
    if (socket) {

      // Reach out to the Backend using the Socket IO Method/Function below
      socket.emit("chatroomMessage", {
        chatroomId,
        message: messageRef.current.value,
      });

      // This will erase the Message in the input box once that message has been loaded above
      messageRef.current.value = "";
    }
  };

  
  // First function executed when this Object Loads. 
  // Similar to Component Di Mount
  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");

    // Here we going to load the User ID to track the messages
    // First we capture the Token and then we going to decode it
    // To decode it we need the Server JS file to send it back

    // "atob" converts to normal string
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }

    if (socket) {
      socket.on("newMessage", (message) => {
        // Rest properties for destructuring assignment
        // this will allow for the properties of the message object to be accessed
        // without using the Object name alias
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
    //eslint-disable-next-line
    // Defining the messages object below will allow us to access the 
    // Array object and appending the new Message to the Messages Array
    // Instead of replacing previous messages
  }, [messages]);



  React.useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div className="chatroomPage">
      <div className="chatroomSection">
        <div className="cardHeader">Chatroom Name</div>
        <div className="chatroomContent">
          {/* Anytime the messages are updated, this function will be rendered */}
          {messages.map((message, i) => (
            <div key={i} className="message">
              <span
                className={
                  // This is how we change color of the Entries in the Chatroom
                  userId === message.userId ? "ownMessage" : "otherMessage"
                }
              >
                {message.name}:
              </span>{" "}
              {message.message}
            </div>
          ))}
        </div>
        <div className="chatroomActions">
          <div>
            <input
              type="text"
              name="message"
              placeholder="Say something!"
              ref={messageRef}
            />
          </div>
          <div>
            <button className="join" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ChatroomPage);




