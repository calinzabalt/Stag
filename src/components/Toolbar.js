import React from "react";

import DrawerButton from "./SideDrawer/DrawerButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">STAG</a>
      </div>
      <div className="space" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signup">Sign-up</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
