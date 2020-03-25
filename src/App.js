import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
//components
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import home from "./pages/Home";
import login from "./pages/Login";
import signup from "./pages/Signup";
import contact from "./pages/Contact";
//redux
import { Provider } from "react-redux";
import storeA from "./redux/storeA";
import storeB from "./redux/storeB";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Provider store={storeA}>
        <Provider store={storeB}>
          <Router>
            <Toolbar drawerClickHandler={this.drawerClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/contact" component={contact} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </Provider>
    );
  }
}

export default App;
