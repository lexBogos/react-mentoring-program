import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Modal from "../../components/Modal";
import NoMatch from "../../components/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Main />
          <Modal />
        </Route>
        <Route path="/movie/:id" exact>
          <Header />
          <Main />
          <Modal />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
