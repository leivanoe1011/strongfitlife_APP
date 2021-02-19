
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../hoc/PrivateRoute";
import UnPrivateRoute from "../hoc/UnPrivateRoute";

import LoginPage from "../Components/LoginPage";
import Register from "../Components/CreateUser/RegisterPage";
import Dash from "../Components/Dashboard";
// import CreateChat from "../Components/CreateUser/CreateUserPage";
import ChatroomPage from "../Components/Chat/ChatPage";
import MainBody from "../Components/Home/MainBody";
import MyStory from "../Components/MyStory"
import PersonalTraining from "../Components/PersonalTraining";
import Beast from "../Components/Beast";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";


function CustomRoutes() {
  return (
    <Switch>
      <Route exact path="/" render={MainBody} />
      <Route exact path="/myStory" render={MyStory} />
      <Route exact path="/personalTraining" render={PersonalTraining} />
      <Route exact path="/contact" render={Contact} />
      <Route exact path="/unleashBeast" render={Beast} />
      <Route exact path="/testimonials" render={Testimonials} />
      <UnPrivateRoute exact path="/login" component={LoginPage} />
      <UnPrivateRoute exact path="/register" component={Register} />
      <PrivateRoute
        exact
        path="/dashboard"
        // roles={["admin", "user"]}
        // component={Dash}
        render={Dash}
      />
      {/* <PrivateRoute
        exact
        path="/createuser"
        roles={["admin"]}
        component={CreateUser}
      /> */}
      {/* The socket lives within the Auth Context */}
      <PrivateRoute
        path="/chatroom/:id"
        roles={["admin", "user"]}
        component={ChatroomPage}
      />
    </Switch>
  );
}

export default CustomRoutes;

