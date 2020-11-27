import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

// screens
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import Market from "./screens/Market";
import Message from "./screens/Message";
import Order from "./screens/Order";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Terms from "./screens/Terms";

function App() {
  return (
    <BrowserRouter basename="/online_market">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/market/" component={Market} />
        <Route path="/message/" component={Message} />
        <Route path="/order/" component={Order} />
        <Route path="/profile/" component={Profile} />
        <Route path="/settings/" component={Settings} />
        <Route path="/terms/" component={Terms} />
        <Route path="/404/" component={NotFound} />
        <Redirect to="/404/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
