

import React, { useState, useContext, useEffect, useRef } from 'react';
import ServerServices from "../../Services/ServerService";
import { withRouter } from "react-router-dom";
import makeToast from "../../Toaster";

import ChatPage from "./ChatPage";

import "./chatroom.css";
import "../../styles/common.css"

// import { AuthContext } from "../../Context/AuthContext";

function Chat () {

  const [ chatrooms, setChatrooms ] = useState([]);

  const getChatrooms = async ()  => {

    await ServerServices.GetAllChatrooms()
    .then((response) => {

        setChatrooms(response);
    })
    .catch((err) => {
      console.log(err);
      makeToast("error", err.response.data.message);
    });

  };


  const chatroomDoesntExist = () =>{
    return(
      <>
        <div style={{ height:'18rem'}}>No chatroom</div>
      </>
    )
   
  }


  const chatroomExists = () =>{
    
    return(
      <>
        <ChatPage chatId={chatrooms[0]._id} chatName={chatrooms[0].name}/>
      </>
    ) 
     
  }


  useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);


  return (
    <>
     
      {chatrooms.length > 0 
      ? chatroomExists()
      : chatroomDoesntExist() }

    </>
  );

}
  


export default withRouter(Chat);



