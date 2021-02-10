

import React, { useRef, useEffect } from "react";
import makeToast from "../../Toaster";
import { Link } from "react-router-dom";
import ServerServices from "../../Services/ServerService";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./chatroom.css";
import "../../styles/common.css"

const CreateChat = (props) => {

  const [chatrooms, setChatrooms] = React.useState([]);

  const chatroomNameRef = useRef();

  const createChatroom = (e) => {

      e.preventDefault();

      const name = chatroomNameRef.current.value;

      ServerServices.CreateChatroom(name)
      .then((response)=>{

        makeToast("success", response.message);

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


  return (
    <div>
      <Card style={{minHeight: "20vh", margin : 25}}>
        <Card.Header>Client</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="chatroomName">
              <Form.Label>Chatroom Name</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Enter Chatroom Name"
                  ref={chatroomNameRef}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={createChatroom}>
                Submit
              </Button>
          </Form>

        </Card.Body>
      </Card>
      <div className="chatrooms">
        {
            chatrooms && chatrooms.length > 0
            ?   chatrooms.map((chatroom) => (

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
            : "Loading..."
        }
      </div>
    </div>
  );
};

export default CreateChat;
