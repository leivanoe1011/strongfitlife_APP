

import React, { useRef, useEffect } from "react";
import makeToast from "../../Toaster";
import { Link } from "react-router-dom";
import ServerServices from "../../Services/ServerService";


const CreateChat = (props) => {

  const [chatrooms, setChatrooms] = React.useState([]);

  const chatroomNameRef = useRef();

  const createChatroom = () => {

      const name = chatroomNameRef.current.value;

      console.log(`in create chatroom ${name}`);

      ServerServices.CreateChatroom(name)
      .then((response)=>{
        const responseMessage = response.data.message;

        makeToast("success", responseMessage);

        chatroomNameRef.current.value = "";
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
      

  }

  const getChatrooms = () => {

    ServerServices.GetAllChatrooms()
    .then((response) => {
        console.log("In Create Chat Page Get all Chatrooms")
        console.log(response);
        setChatrooms(response);
    })
    .catch((err) => {
        setTimeout(getChatrooms, 3000);
    });

  };

  useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);

  let itemsToRender;

  if(chatrooms){
    itemsToRender = chatrooms.map((chatroom) => (

        // Each Chatroom that gets created, an ID gets loaded to the KEY property
        // Also this Key gets appended to the Route of Each Chatroom instances
        <div key={chatroom._id} className="chatroom">
          <div>{chatroom.name}</div>
          {/* The Chatroom ID will be stored in the Match.Params.ID parameter */}
          <Link to={"/chatroom/" + chatroom._id}>
            <div className="join">Join</div>
          </Link>
        </div>
      ))
  }
  else {
    itemsToRender = "Loading...";
  }

  return (
    <div className="card">
      <div className="cardHeader">Chatrooms</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="ChatterBox Nepal"
            ref={chatroomNameRef}
          />
        </div>
      </div>
      <button onClick={createChatroom}>Create Chatroom</button>
      <div className="chatrooms">
        {itemsToRender}
      </div>
    </div>
  );
};

export default CreateChat;
