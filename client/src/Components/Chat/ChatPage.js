

import React, { useState, useContext, useEffect, useRef } from 'react';
import ServerServices from "../../Services/ServerService";
import { withRouter } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormGroup";

import "./chatroom.css";
import "../../styles/common.css"


import { AuthContext } from "../../Context/AuthContext";

function Chat (props) {

    console.log("In Chat Page js file");

    const chatroomId = props.chatId;

    // const chatroomId = "lkd";

    const chatName = props.chatName;
    // const chatName = "chat name";

    
    const { socket, userId } = useContext(AuthContext);

    console.log("Socket");
    console.log(socket);


    // Instantiate Array
    const [messages, setMessages] = useState([]);

    const messageRef = useRef();

    const [loadedMessages, setLoadedMessages] = useState(false);

    const sendMessage = (e) => {

      e.preventDefault();

      console.log("In send message function")
      
      const newMessage = messageRef.current.value

      console.log(newMessage);

      if (socket) {
        console.log("In socket emit");

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
          
          console.log("In join room");

          console.log(socket);

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
        <div>
         
         {/* <Card style={{ width: '18rem' }}> */}
         <Card style={{ margin : 10}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title> {chatName.replaceAll("_"," ")} </Card.Title>
            <Card.Text>
             
             {/* <div className="chatroomContent"> */}

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
                    </span>{" "}
                    {message.message}
                  </div>
                ))
                : <div style={{ height:'18rem'}}>"No Messages"</div>
              }
            {/* </div> */}
             
             {/* <div className="chatroomActions"> */}
             <InputGroup>
              <FormControl 
                  as="textarea" 
                  aria-label="With textarea" 
                  name="message"
                  placeholder="Say something!"
                  ref={messageRef}/>
            </InputGroup>

            </Card.Text>
            <Button variant="primary" onClick={sendMessage}>Send</Button>
          </Card.Body>
        </Card>

        </div>
      );

}
  


export default withRouter(Chat);



