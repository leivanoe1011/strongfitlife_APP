
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../hoc/PrivateRoute";
import UnPrivateRoute from "../hoc/UnPrivateRoute";

import LoginPage from "../Components/LoginPage";
import Register from "../Components/CreateUser/RegisterPage";
import Dash from "../Components/Dashboard";
<<<<<<< HEAD
// import CreateChat from "../Components/CreateUser/CreateUserPage";
import ChatroomPage from "../Components/Chat/ChatPage";
=======
import CreateUserPage from "../Components/CreateUser/CreateUserPage";
>>>>>>> aa0226c8eedb463087f11ea69e985d9fa4eff62d
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
<<<<<<< HEAD
      <UnPrivateRoute exact path="/register" component={Register} />
      <PrivateRoute
=======
      <UnPrivateRoute exact path="/register" component={RegisterPage} />
      <Route
>>>>>>> aa0226c8eedb463087f11ea69e985d9fa4eff62d
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
<<<<<<< HEAD
        component={CreateUser}
      /> */}
      {/* The socket lives within the Auth Context */}
      <PrivateRoute
        path="/chatroom/:id"
        roles={["admin", "user"]}
        component={ChatroomPage}
      />
=======
        component={CreateUserPage}
      />

>>>>>>> aa0226c8eedb463087f11ea69e985d9fa4eff62d
    </Switch>
  );
}

export default CustomRoutes;

