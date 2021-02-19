

const ServerServices = {

    
    GetChatMessages : async (chatroomId) => {
        
        const requestOptions = {
            method: 'POST',
            // method: 'GET', // can only pass numeric IDs with GET
            headers: { 
                "Authorization" : "Bearer " + localStorage.getItem("CC_Token"),
                "Content-Type" : "application/json"
            },
            body: JSON.stringify( {id : chatroomId} )
        };


        const res = await fetch("http://localhost:8000/messages/getAllMessages", requestOptions);

        const data = await res.json();
        
        return data;
    },

    GetChatroomId : async (userId) => {

        const requestOptions = {
            method : "POST",
            headers : { 
                 // "Authorization" : "Bearer " + localStorage.getItem("CC_Token"),
                "Content-Type" : "application/json"
            },
            body : JSON.stringify( { id : userId })
        }

        const res = await fetch("http://localhost:8000/chatroom/getChatId", requestOptions);

        const data = await res.json();

        return data;

    },

    CreateChatroom : async (name) => {

        // Don't forget the space for the authorization
        const requestOptions = {
            method : "POST",
            headers : {
                "Authorization" : "Bearer " + localStorage.getItem("CC_Token"),
                "Content-Type" : "application/json"
            },
            body : JSON.stringify( {name})
        }

        const res = await fetch("http://localhost:8000/chatroom/createChatroom", requestOptions);
        const data = await res.json();

        console.log("After Chatroom created");
        console.log(data);

        return data;
    },

    GetAllChatrooms : async () => {

        console.log("Server Services. Get all chatrooms")

        const requestOptions = {
            method : "POST",
            headers : { 
                "Content-Type" : "application/json", 
                "Authorization" : "Bearer " + localStorage.getItem("CC_Token") 
            }
        }

        const res = await fetch("http://localhost:8000/chatroom/all", requestOptions);

        const data = await res.json();      

        if (data.status !== 401) {
            return data;
        }
        else {
            return { message: "no chatrooms", data};
        }

    }

}


export default ServerServices;
