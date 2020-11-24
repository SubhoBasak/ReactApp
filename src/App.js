import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// screens
import Contacts from "./screens/Account/Contacts";
import Profile from "./screens/Account/Profile";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import Market from "./screens/Market";
import Order from "./screens/Order";
import Settings from "./screens/Settings";
import Terms from "./screens/Terms";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/contacts/" component={Contacts} />
      <Route path="/dashboard/" component={Dashboard} />
      <Route path="/market/" component={Market} />
      <Route path="/order/" component={Order} />
      <Route path="/profile/" component={Profile} />
      <Route path="/settings/" component={Settings} />
      <Route path="/terms/" component={Terms} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
