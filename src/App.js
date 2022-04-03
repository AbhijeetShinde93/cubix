import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/js/dist/popover.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import OurService from "./components/OurServices/OurService";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container-fluid px-0" id="page-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={About} />
            <Route path="/ourservices" component={OurService} />
            <Route path="/career" component={Career} />
            <Route path="/contactus" component={Contact} />
          </Switch>
        </div>
        <Footer id="footer" />
      </Router>
    </div>
  );
}

export default App;
