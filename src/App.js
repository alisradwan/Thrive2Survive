import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import custom components
import Header from "./components/Header";
import Home from "./pages/Home";
import EventRegistration from "./pages/EventRegistration";
import OurBoardOfDirectors from "./pages/OurBoardOfDirectors";
import Connections from "./pages/Connections";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import Terminal from "./pages/Terminal";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NoMatch from "./pages/NoMatch";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-typist/dist/Typist.css";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/Thrive2Survive" component={Terminal} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Connections" component={Connections} />
            <Route
              exact
              path="/EventRegistration"
              component={EventRegistration}
            />
            <Route
              exact
              path="/OurBoardOfDirectors"
              component={OurBoardOfDirectors}
            />
            <Route exact path="/OurWork" component={OurWork} />
            <Route exact path="/Donations" component={Donations} />
            <Route exact path="/Contact" component={Contact} />
            <Route path="/*" component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
