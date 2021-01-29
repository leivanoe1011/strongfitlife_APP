

import React, { useState, useContext, useEffect, useRef } from 'react';
import ServerServices from "../../Services/ServerService";
import { withRouter } from "react-router-dom";


import { AuthContext } from "../../Context/AuthContext";

function Chat (props) {

    console.log("In Chat Page js file");

    const chatroomId = props.match.params.id;

    // const token = localStorage.getItem("CC_Token"); 

    const { socket, userId } = useContext(AuthContext);


    // Instantiate Array
    const [messages, setMessages] = useState([]);

    const messageRef = useRef();

    const [loadedMessages, setLoadedMessages] = useState(false);

    const sendMessage = () => {

      const newMessage = messageRef.current.value

      if (socket) {
        socket.emit("chatroomMessage", {
          chatroomId,
          message: newMessage,
        });
  
        messageRef.current.value = "";
      }
      else{
        console.log("Missing Socket");
      }
    };


    // Initial Load of all messages
    useEffect(() => {

        if(!loadedMessages && socket) {
    
         ServerServices.GetChatMessages(chatroomId)
            .then((data) => {
              console.log("In Get Chat Messages");
              console.log(data);
    
              const newMessage = [];
    
             for(var i = 0; i < data.length; i++){
    
                var tempObj = {
                  message : data[i].message,
                  userId : data[i].user._id,
                  name : data[i].user.firstName
                }
    
                newMessage.push(tempObj);
    
              }
    
              // Loading the Messages here will trigger the Messages state to
              // load all the messages in the server
              setMessages(newMessage);


              // This will prevent all messages to be reloaded
              setLoadedMessages(true);
    
            })
        }
      })


    // Listen to new Messages
    useEffect( () => {
        

        if(socket){
            socket.on("newMessage",(message) =>{
                const newMessage = [...messages,message];
                setMessages(newMessage);
            })
        }

    //eslint-disable-next-line
    }, [messages]);


    useEffect(() => {
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

              {/* Need to validate if the object has content */}
              {messages && messages.length > 0
                ? messages.map((message, i) => (
                  <div key={i} className="message">
                    <span
                      className={
                        userId === message.userId ? "ownMessage" : "otherMessage"
                      }
                    >
                      {message.name}:
                    </span>
                    {message.message}
                  </div>
                ))
                : <div>"No Messages"</div>
              }
             
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

}
  


export default withRouter(Chat);



