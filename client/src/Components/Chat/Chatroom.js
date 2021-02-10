

import React, { useState, useContext, useEffect, useRef } from 'react';
import ServerServices from "../../Services/ServerService";
import { withRouter } from "react-router-dom";
import makeToast from "../../Toaster";

import ChatPage from "./ChatPage";

import "../Chat/chatroom.css";
import "../../styles/common.css"


// import { AuthContext } from "../../Context/AuthContext";

function Chat () {

  const [ chatrooms, setChatrooms ] = useState([]);

  const getChatrooms = () => {

    ServerServices.GetAllChatrooms()
    .then((response) => {
        console.log("After getting messages");

        console.log(chatrooms[0])
        
        setChatrooms(response);
    })
    .catch((err) => {
      console.log(err);
      makeToast("error", err.response.data.message);
    });

  };

  useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <ChatPage chatId={chatrooms[0]} />
    </div>
  );

}
  


export default withRouter(Chat);



