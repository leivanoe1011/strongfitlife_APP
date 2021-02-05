import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from 'react-router-dom';

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import CustomRoutes from "./Services/RoutesServices";

import history from "./Services/History";

function App() {
  return (
    <Router history={history}>
      {/* The Link components in the NavBar must live within the Router component */}
      <NavBar />
      <CustomRoutes/>
      <Footer />
    </Router>
  );
}

export default App;
