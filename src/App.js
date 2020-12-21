import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-vis/dist/style.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

// screens
import Dashboard from "./screens/Dashboard";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Market from "./screens/Market";
import Orders from "./screens/Orders";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import Subscription from "./screens/Subscription";
import Terms from "./screens/Terms";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/details/:pid/" component={Details} />
        <Route path="/market/" component={Market} />
        <Route path="/orders/" component={Orders} />
        <Route path="/profile/" component={Profile} />
        <Route path="/settings/" component={Settings} />
        <Route path="/subscription/" component={Subscription} />
        <Route path="/terms/" component={Terms} />
        <Route path="/404/" component={NotFound} />
        <Redirect to="/404/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
