
import React from "react";

// import Body from "./DashboardBody";
import Chat from "../Chat/CreateChatPage";


function Dashboard() {

    return(
        <section>
                       
            {/* Chatbox */}
            <div className="container">
                <Chat/>
            </div>
            
        </section>
    )
}

export default Dashboard;

